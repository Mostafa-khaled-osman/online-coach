import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

const groups = [
  {
    title: "Morning",
    items: ["Creatine monohydrate - 5g", "Vitamin D3 + K2 - with breakfast"],
  },
  {
    title: "Mid-day",
    items: ["Omega-3 fish oil - with lunch"],
  },
  {
    title: "Evening",
    items: ["Magnesium bisglycinate - 60 minutes before sleep"],
  },
]

export function SupplementGuide() {
  return (
    <div className="space-y-8">
      <PageHeader
        actions={
          <>
            <Button asChild variant="outline">
              <Link to="/athlete/nutrition-tracker">Back to nutrition</Link>
            </Button>
            <Button>Mark day complete</Button>
          </>
        }
        description="Supplements now sit beside meals and nutrition tracking instead of acting like a disconnected page."
        eyebrow="Athlete hub"
        title="Supplement Guide"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((group) => (
          <Card key={group.title}>
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
              <CardDescription>Daily routine</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              {group.items.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
