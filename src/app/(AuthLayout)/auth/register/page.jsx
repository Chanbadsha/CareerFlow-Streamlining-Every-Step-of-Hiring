import RegisterForm from "@/Components/Auth/RegisterForm";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Shell, ShieldCheck, Zap } from "lucide-react";

const RegisterPage = () => {
  return (
    <div className="min-h-screen  bg-background">
      <div className="w-full min-h-screen  grid md:grid-cols-2 ">
        {/* LEFT */}
        <div className="hidden md:flex flex-col justify-center bg-[#3729ce] text-white">
          <div className="ml-8 lg:ml-20 lg:max-w-xl  flex flex-col gap-6">
            {/* BRAND */}
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <Shell className="w-6 h-6 xl:w-8 xl:h-8" />
                CareerFlow
              </h1>

              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Precision-grade recruitment for modern leaders.
              </h3>

              <p className="text-sm mr-6 lg:mr-0 text-white/80 leading-relaxed max-w-lg">
                The elite ecosystem where visionaries find their next challenge
                and teams find their next breakthrough.
              </p>
            </div>

            {/* FEATURE 1 */}
            <article className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
              <div className="mt-0.5 flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white">
                <Zap className="w-5 h-5" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">
                  Real-time matching
                </span>

                <p className="text-xs text-white/70 leading-relaxed">
                  Our AI identifies the perfect fit based on skill density and
                  cultural alignment.
                </p>
              </div>
            </article>

            {/* FEATURE 2 */}
            <article className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
              <div className="mt-0.5 flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">Verified networks</span>

                <p className="text-xs text-white/70 leading-relaxed">
                  Exclusive talent pool verified through multi-stage peer
                  assessment.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* RIGHT */}
        <section className="w-full px-6 lg:px-0 flex flex-col my-12  justify-center max-w-md mx-auto">
          <div className="mb-8 space-y-1 text-center sm:text-left ">
            <h3 className="text-3xl font-semibold tracking-tight text-foreground">
              Create account
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Elevate your professional trajectory today.
            </p>
          </div>

          <RegisterForm />
        </section>
      </div>
    </div>
  );
};

export default RegisterPage;
