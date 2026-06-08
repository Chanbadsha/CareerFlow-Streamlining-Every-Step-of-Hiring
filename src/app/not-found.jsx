"use client";

import { Button, Input, Card } from "@heroui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-[#09090B] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-30 left-1/2 -translate-x-1/2 w-125 h-125 bg-indigo-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-30 right-1/2 translate-x-1/2 w-100 h-100 bg-violet-500/10 blur-3xl rounded-full" />
      </div>

      {/* Main Card */}
      <Card className="w-full max-w-2xl z-10 border border-gray-200 dark:border-white/10 bg-white dark:bg-[#18181B] shadow-xl rounded-2xl p-10 text-center space-y-8">
        {/* 404 */}
        <h1 className="text-7xl md:text-8xl font-extrabold bg-linear-to-r from-indigo-500 to-violet-500 text-transparent bg-clip-text">
          404
        </h1>

        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
            Page not found
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            The page you&apos;re looking for doesn’t exist or has been moved.
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500">
            Let’s get you back to opportunities.
          </p>
        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row gap-3">
          <Input
            className="flex-1 placeholder:text-primary"
            placeholder="Search jobs, companies..."
          />
          <Button color="primary" className="bg-indigo-500 hover:bg-indigo-600">
            Search
          </Button>
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <Button
            color="primary"
            className="bg-secondary"
            onClick={() => router.push("/")}
          >
            Go to Home
          </Button>

          <Button
            className=" dark:text-background"
            variant="outline"
            onClick={() => router.push("/jobs")}
          >
            Browse Jobs
          </Button>

          <Button
            className=" dark:text-background"
            variant="outline"
            as={Link}
            href="/companies"
          >
            View Companies
          </Button>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
          <Link href="/jobs">
            <div
              className={`p-4 rounded-xl border text-foreground bg-background border-gray-200 dark:border-white/10 hover:scale-[1.02] transition  dark:bg-[#27272A] cursor-pointer`}
            >
              <p className="text-sm font-medium">Jobs</p>
            </div>
          </Link>

          <Link href="/companies">
            <div className="p-4 rounded-xl border text-foreground bg-background border-gray-200 dark:border-white/10 hover:scale-[1.02] transition  dark:bg-[#27272A] cursor-pointer">
              <p className="text-sm font-medium">Companies</p>
            </div>
          </Link>

          <Link href="/pricing">
            <div
              className={`p-4 rounded-xl border text-foreground bg-background border-gray-200 dark:border-white/10 hover:scale-[1.02] transition dark:bg-[#27272A] cursor-pointer`}
            >
              <p className="text-sm font-medium">Pricing</p>
            </div>
          </Link>

          <Link href="/dashboard">
            <div className="p-4 rounded-xl border border-gray-200 text-foreground bg-background dark:border-white/10 hover:scale-[1.02] transition  dark:bg-[#27272A] cursor-pointer">
              <p className="text-sm font-medium">Dashboard</p>
            </div>
          </Link>
        </div>
      </Card>
    </div>
  );
}
