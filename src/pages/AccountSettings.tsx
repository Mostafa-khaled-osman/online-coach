import { useState, type FormEvent } from "react"
import { useAuth } from "../context/AuthContext"
import { api, getApiError } from "../lib/api"
import { PageHeader } from "../components/ui/PageHeader"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { UserRound, Shield, CheckCircle, AlertCircle, Image } from "lucide-react"

export function AccountSettings() {
  const { user } = useAuth()
  const isCoach = user?.role === "ROLE_COACH"

  const [isLoading, setIsLoading] = useState(false)
  const [profileMsg, setProfileMsg] = useState<{ type: "success" | "error"; text: string } | null>(null)
  
  // Coach specific
  const [bio, setBio] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [profileImage, setProfileImage] = useState<File | null>(null)
  
  // Client specific
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("MALE")
  const [phone, setPhone] = useState("")

  // Shared
  const [passForm, setPassForm] = useState({ current: "", newPass: "", confirm: "" })
  const [passLoading, setPassLoading] = useState(false)
  const [passMsg, setPassMsg] = useState<{ type: "success" | "error"; text: string } | null>(null)

  async function handleProfileSave(e: FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setProfileMsg(null)

    try {
      if (isCoach) {
        const formData = new FormData()
        formData.append("bio", bio)
        formData.append("specialization", specialization)
        if (profileImage) formData.append("file", profileImage)

        await api.put("/coach/profile", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
      } else {
        await api.put("/client/profile", { age: Number(age), gender, phone })
      }
      setProfileMsg({ type: "success", text: "Profile updated successfully!" })
    } catch (err) {
      setProfileMsg({ type: "error", text: getApiError(err) })
    } finally {
      setIsLoading(false)
    }
  }

  async function handlePasswordSave(e: FormEvent) {
    e.preventDefault()
    if (passForm.newPass !== passForm.confirm) {
      setPassMsg({ type: "error", text: "Passwords do not match." })
      return
    }

    setPassLoading(true)
    setPassMsg(null)
    try {
      await api.put("/auth/change-password", {
        currentPassword: passForm.current,
        newPassword: passForm.newPass,
      })
      setPassMsg({ type: "success", text: "Password updated successfully!" })
      setPassForm({ current: "", newPass: "", confirm: "" })
    } catch (err) {
      setPassMsg({ type: "error", text: getApiError(err) })
    } finally {
      setPassLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <PageHeader
        description="Manage your account details and security settings."
        eyebrow={isCoach ? "Coach workspace" : "Athlete hub"}
        title="Settings"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
              <UserRound className="h-5 w-5" />
            </div>
            <CardTitle>Profile Details</CardTitle>
            <CardDescription>Update your personal information.</CardDescription>
          </CardHeader>
          <CardContent>
            {profileMsg && (
              <div className={`mb-5 flex items-center gap-3 rounded-xl p-4 text-sm ${
                profileMsg.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
              }`}>
                {profileMsg.type === "success" ? <CheckCircle className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
                {profileMsg.text}
              </div>
            )}

            <form onSubmit={handleProfileSave} className="space-y-5">
              {isCoach ? (
                <>
                  <label className="block space-y-2 text-sm">
                    <span className="font-medium text-slate-700">Specialization</span>
                    <input
                      required value={specialization} onChange={(e) => setSpecialization(e.target.value)}
                      placeholder="e.g. Strength & Conditioning"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    />
                  </label>
                  <label className="block space-y-2 text-sm">
                    <span className="font-medium text-slate-700">Bio</span>
                    <textarea
                      required value={bio} onChange={(e) => setBio(e.target.value)} rows={4}
                      placeholder="Tell potential clients about your coaching style..."
                      className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    />
                  </label>
                  <label className="block space-y-2 text-sm">
                    <span className="font-medium text-slate-700">Profile Image</span>
                    <div className="flex items-center gap-4 rounded-xl border border-dashed border-slate-300 p-4">
                      <Image className="h-6 w-6 text-slate-400" />
                      <div className="flex-1">
                        <p className="text-sm text-slate-600">{profileImage ? profileImage.name : "Click to upload image"}</p>
                      </div>
                      <input
                        type="file" accept="image/*" onChange={(e) => setProfileImage(e.target.files?.[0] ?? null)}
                        className="absolute inset-0 cursor-pointer opacity-0"
                      />
                    </div>
                  </label>
                </>
              ) : (
                <>
                  <label className="block space-y-2 text-sm">
                    <span className="font-medium text-slate-700">Phone Number</span>
                    <input
                      required value={phone} onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1234567890"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    />
                  </label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block space-y-2 text-sm">
                      <span className="font-medium text-slate-700">Age</span>
                      <input
                        required type="number" min="10" max="100" value={age} onChange={(e) => setAge(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                      />
                    </label>
                    <label className="block space-y-2 text-sm">
                      <span className="font-medium text-slate-700">Gender</span>
                      <select
                        value={gender} onChange={(e) => setGender(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                      >
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </label>
                  </div>
                </>
              )}

              <button
                type="submit" disabled={isLoading}
                className="flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 disabled:opacity-50"
              >
                {isLoading ? "Saving..." : "Save Profile"}
              </button>
            </form>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <Shield className="h-5 w-5" />
            </div>
            <CardTitle>Security</CardTitle>
            <CardDescription>Update your password.</CardDescription>
          </CardHeader>
          <CardContent>
            {passMsg && (
              <div className={`mb-5 flex items-center gap-3 rounded-xl p-4 text-sm ${
                passMsg.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
              }`}>
                {passMsg.type === "success" ? <CheckCircle className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
                {passMsg.text}
              </div>
            )}

            <form onSubmit={handlePasswordSave} className="space-y-5">
              <label className="block space-y-2 text-sm">
                <span className="font-medium text-slate-700">Current Password</span>
                <input
                  required type="password"
                  value={passForm.current} onChange={(e) => setPassForm((p) => ({ ...p, current: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>
              <label className="block space-y-2 text-sm">
                <span className="font-medium text-slate-700">New Password</span>
                <input
                  required type="password"
                  value={passForm.newPass} onChange={(e) => setPassForm((p) => ({ ...p, newPass: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>
              <label className="block space-y-2 text-sm">
                <span className="font-medium text-slate-700">Confirm New Password</span>
                <input
                  required type="password"
                  value={passForm.confirm} onChange={(e) => setPassForm((p) => ({ ...p, confirm: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>

              <button
                type="submit" disabled={passLoading}
                className="flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 disabled:opacity-50"
              >
                {passLoading ? "Updating..." : "Update Password"}
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
