import { MoveRight } from "lucide-react";
import Link from "next/link";
import jobs from "../../../public/jobs.json";
import JobCard from "../Shared/JobCard";
const FeaturedProducts = () => {
  return (
    <div className="container mx-auto px-4">
      <header>
        <h4 className="font-inter text-2xl lg:text-3xl xl:text-4xl leading-relaxed">
          Featured Opportunities
        </h4>
        <p className="flex justify-between items-center ">
          <span className="leading-relaxed">
            Top-tier technical roles handpicked for your profile.
          </span>
          <Link
            className="flex items-center gap-1 text-primary font-inter font-semibold text-sm"
            href={"/jobs"}
          >
            View All 200 Jobs <MoveRight />
          </Link>
        </p>
      </header>
      {/* Job Container */}
      <section className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 my-8">
        {jobs.map((job, ind) => (
          <JobCard index={ind} job={job} key={ind} />
        ))}
      </section>
    </div>
  );
};

export default FeaturedProducts;
