import { Bookmark, Dot } from "lucide-react";

const JobCard = ({ job, index }) => {
  const isFeatured = index === 0;

  const salary = job?.salary
    ? `$${job.salary.min / 1000}k - $${job.salary.max / 1000}k`
    : "Not disclosed";

  const location = `${job?.companyId?.name || "Company"} • ${
    job?.location?.city
  } / ${job?.isRemote ? "Remote" : "Onsite"}`;

  return (
    <div
      className={`
        group relative rounded-3xl border bg-white p-6 shadow-sm transition
        hover:-translate-y-1 hover:shadow-xl
        ${isFeatured ? "md:col-span-2 border-indigo-500/30" : "border-border"}
      `}
    >
      {/* TOP */}
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-700">
            {job?.title?.slice(0, 2).toUpperCase()}
          </div>

          <div>
            <h3 className="font-semibold text-foreground">{job?.title}</h3>

            <p className="flex items-center text-sm text-muted-foreground">
              {job?.category}
              <Dot className="mx-1 inline size-3" />
              {job?.subCategory}
            </p>
          </div>
        </div>

        <span
          className={`
            rounded-full px-3 py-1 text-xs font-semibold
            ${
              job?.isRemote
                ? "bg-emerald-100 text-emerald-700"
                : "bg-indigo-100 text-indigo-700"
            }
          `}
        >
          {job?.isRemote ? "Remote" : job?.type}
        </span>
      </div>

      {/* DESCRIPTION */}
      {isFeatured && (
        <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
          {job?.shortDescription || job?.description}
        </p>
      )}

      {/* TAGS */}
      {job?.tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {job.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* BOTTOM */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
            {salary}
          </span>

          <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600">
            {job?.experienceLevel}
          </span>
        </div>

        <button className="opacity-60 transition group-hover:opacity-100">
          <Bookmark className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
