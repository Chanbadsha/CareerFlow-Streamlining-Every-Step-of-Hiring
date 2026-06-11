import { Button } from "@heroui/react";
import meetingImg from "../../images/group-meating.jpg";
import Image from "next/image";

const EnterpriseHiringSection = () => {
  return (
    <div
      className="container my-8 mx-auto relative overflow-hidden rounded-4xl bg-cover bg-center"
      style={{
        backgroundImage: `url(${meetingImg.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 px-8 py-20 lg:px-16 lg:py-28">
        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
          For Hiring Teams
        </p>

        <h3 className="max-w-3xl font-inter text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
          Scale your technical workforce with speed
        </h3>
        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 lg:text-lg">
          CareerFlow&apos;s precision matching reduces time-to-hire by 64%.
          Access a pre-vetted pool of top 1% engineering talent today.
        </p>
        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            variant="primary"
            className="rounded-2xl bg-linear-to-r from-primary to-secondary px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Book Demo
          </Button>

          <Button
            variant="outline"
            className="rounded-2xl border border-white/30 bg-white/10 px-8 py-6 text-lg text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
          >
            View Enterprise Pricing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseHiringSection;
