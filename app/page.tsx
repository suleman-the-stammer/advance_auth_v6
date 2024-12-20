import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 via-indigo-50 to-white">
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold text-slate-700 drop-shadow-sm",
          font.className,
        )}>
          🔐 Auth
        </h1>
        <p className="text-slate-500 text-lg">
          A simple authentication service
        </p>
        <div>
          <LoginButton  asChild>
            <Button size="lg" className="rounded-full px-10 shadow-lg shadow-indigo-300/40">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
