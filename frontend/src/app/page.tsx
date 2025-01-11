"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push("/login")
  }, [router])
  return (
    <div className="flex items-center justify-center">
      <h1>Redirecting...</h1>
    </div>
  )
}