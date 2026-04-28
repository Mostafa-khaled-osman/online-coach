import axios from "axios"

/**
 * Pre-configured Axios instance for the Gymeni backend.
 * - baseURL points to Spring Boot at localhost:5050
 * - withCredentials ensures the HttpOnly JWT cookie is sent on every request
 */
export const api = axios.create({
  baseURL: (import.meta as unknown as { env: { VITE_API_URL?: string } }).env?.VITE_API_URL ?? "http://localhost:5050",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

// Global response interceptor: redirect to /signin on 401 Unauthorized
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear auth and redirect
      window.location.href = "/signin"
    }
    return Promise.reject(error)
  }
)

// ─── Type Helpers ──────────────────────────────────────────────────────────────

export type ApiError = {
  message: string
  status?: number
}

export function getApiError(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.message ??
      error.response?.data?.error ??
      error.message ??
      "An unexpected error occurred."
    )
  }
  return "An unexpected error occurred."
}
