import { Brain, HeartHandshake, ShieldCheck } from "lucide-react";

const ToolsSection = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 py-24">
      <div className="container mx-auto text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight text-foreground">
            Recruitment Reinvented
          </h2>

          <p className="mt-4 text-muted-foreground text-base lg:text-lg leading-relaxed">
            The tools you need to bypass the noise and focus on growth.
          </p>
        </div>

        <section className="grid lg:grid-cols-3 gap-8 lg:gap-10 mt-16">
          {/* Card-1 */}
          <div className="group bg-background border border-default-200 px-8 py-12 flex flex-col items-center gap-5 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <span className="bg-indigo-500/10 p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Brain size={34} className="text-indigo-600" />
            </span>

            <h6 className="font-bold text-xl lg:text-2xl text-foreground">
              AI Matching
            </h6>

            <p className="max-w-xs text-center leading-7 text-muted-foreground">
              Our engine parses multi-dimensional data points to find roles that
              actually align with your skill trajectory.
            </p>
          </div>

          {/* Card-2 */}
          <div className="group bg-background border border-default-200 px-8 py-12 flex flex-col items-center gap-5 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <span className="bg-green-500/10 p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck size={34} className="text-green-600" />
            </span>

            <h6 className="font-bold text-xl lg:text-2xl text-foreground">
              Verified Salary
            </h6>

            <p className="max-w-xs text-center leading-7 text-muted-foreground">
              Real-time salary data verified by tax records and offer letters.
              No more guessing games or lowball offers.
            </p>
          </div>

          {/* Card-3 */}
          <div className="group bg-background border border-default-200 px-8 py-12 flex flex-col items-center gap-5 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <span className="bg-indigo-500/10 p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <HeartHandshake size={34} className="text-indigo-600" />
            </span>

            <h6 className="font-bold text-xl lg:text-2xl text-foreground">
              Direct Contact
            </h6>

            <p className="max-w-xs text-center leading-7 text-muted-foreground">
              Skip the third-party recruiters. Get direct access to hiring
              managers and engineering leads.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ToolsSection;
