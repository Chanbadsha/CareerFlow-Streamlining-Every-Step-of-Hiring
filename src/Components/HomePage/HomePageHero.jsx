"use client";
import { Button } from "@heroui/react";
import {
  BadgeCheck,
  Building,
  Building2,
  Dot,
  MoveRight,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const HomePageHero = () => {
  return (
    <div className="bg-linear-to-br from-background via-muted/30 to-primary/5">
      <div className="container mx-auto flex items-center justify-between lg:py-20 py-6 flex-col lg:flex-row px-4">
        {/* Left Bar */}
        <section className="xl:max-w-2xl relative w-full ">
          <p className="inline-flex items-center rounded-full border border-primary/10 bg-primary/10 px-4 py-2 text-sm font-semibold text-secondary backdrop-blur-sm">
            <span className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-primary animate-pulse ring-4 ring-primary/20" />
              Revolutionizing Recruitment
            </span>
          </p>
          <h1 className="my-6 font-inter text-5xl font-extrabold leading-tight xl:text-7xl">
            Where Careers
            <br />
            and Companies
            <br />
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Move Forward.
            </span>
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            CareerFlow connects job seekers and recruiters in one intelligent
            hiring ecosystem. Built for modern high-performance teams.
          </p>
          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              className="rounded-xl bg-linear-to-r from-primary to-secondary px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              Start Exploring Jobs
            </Button>

            <Button
              variant="outline"
              className="rounded-xl border-border bg-background/70 px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              Post a Job
            </Button>
          </div>
          <Link
            href="/pricing"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-bold tracking-wider text-secondary"
          >
            View Pricing
            <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          {/* Job Card */}

          <motion.div
            className="lg:absolute mt-12 lg:mt-0 xl:-right-96 xl:top-60 -right-44 top-40 z-30 rounded-3xl border border-border/50 bg-white/80 p-6 shadow-2xl backdrop-blur-xl"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative flex flex-col">
              {/* Header */}
              <h6 className="text-lg font-bold text-foreground">Job Feed</h6>

              {/* Job 1 */}
              <div className="mt-4 rounded-2xl border border-border bg-white px-5 py-4 shadow-sm transition hover:shadow-md">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-secondary/20 font-semibold text-secondary">
                      L
                    </div>

                    <div>
                      <p className="text-sm font-bold">Lead Product Designer</p>
                      <p className="text-sm text-muted-foreground">
                        Linear <Dot className="mx-1 inline size-3" /> Remote
                      </p>
                    </div>
                  </div>

                  <BadgeCheck className="size-4 text-primary" />
                </div>

                <div className="mt-3 flex gap-2">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    $160K - $210K
                  </span>

                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                    Full-time
                  </span>
                </div>
              </div>

              {/* Job 2 */}
              <div className="mt-4 rounded-2xl border border-border bg-white px-5 py-4 shadow-sm transition hover:shadow-md">
                <div className="flex gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-100 font-semibold text-indigo-600">
                    S
                  </div>

                  <div>
                    <p className="text-sm font-bold">Staff Software Engineer</p>
                    <p className="text-sm text-muted-foreground">
                      Stripe <Dot className="mx-1 inline size-3" /> New York
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Info (STATIC — no motion) */}
              <div className="absolute -top-12 -right-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/70 px-4 py-2 shadow-lg backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-indigo-500" />

                <div className="flex items-center gap-2 text-xs font-medium">
                  <span className="font-semibold">Smart Match</span>
                  <span className="text-gray-400">•</span>
                  <span className="font-semibold text-green-600">
                    98% Fit Found
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Right Bar */}
        <section className="space-y-5 flex  gap-4  lg:flex-col flex-wrap mt-6 lg:mt-0   justify-center">
          <div className="group flex justify-between gap-16 rounded-2xl border border-border/50 bg-white/80 px-7 py-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl dark:bg-black/50">
            <div>
              <h5 className="font-inter text-5xl font-extrabold transition-transform duration-500 group-hover:translate-x-2">
                12000+
              </h5>
              <p className="mt-1 text-muted-foreground">Active Jobs</p>
            </div>

            <TrendingUp className="h-12 w-12 text-gray-400 transition-all duration-500 group-hover:scale-110 group-hover:text-primary" />
          </div>

          <div className="group flex justify-between gap-16 rounded-2xl border border-border/50 bg-white/80 px-7 py-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl dark:bg-black/50">
            <div>
              <h5 className="font-inter text-5xl font-extrabold transition-transform duration-500 group-hover:translate-x-2">
                1200+
              </h5>
              <p className="mt-1 text-muted-foreground">Companies</p>
            </div>

            <Building2 className="h-12 w-12 text-gray-400 transition-all duration-500 group-hover:scale-110 group-hover:text-primary" />
          </div>

          <div className="group flex justify-between gap-16 rounded-2xl border border-border/50 bg-white/80 px-7 py-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl dark:bg-black/50">
            <div>
              <h5 className="font-inter text-5xl font-extrabold transition-transform duration-500 group-hover:translate-x-2">
                94%
              </h5>
              <p className="mt-1 text-muted-foreground">Hiring Success</p>
            </div>

            <ShieldCheck className="h-12 w-12 text-gray-400 transition-all duration-500 group-hover:scale-110 group-hover:text-primary" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePageHero;
