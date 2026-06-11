import { ChevronDown } from "@gravity-ui/icons";
import { Accordion } from "@heroui/react";

export function FAQ() {
  const categories = [
    {
      items:
        //     {
        //       content:
        //         "Our engine uses semantic vector analysis to compare your career history, technical stack, and future goals against thousands of detailed company profiles, finding alignments that go beyond keyword matching.",
        //       title: "How does the precision matching engine work?",
        //     },
        //     {
        //       content:
        //         "No. We offer an 'Incognito' mode where you can hide your profile from specific companies or entire industries to ensure your job search remains private.",
        //       title: "Is my profile visible to my current employer",
        //     },
        //     {
        //       content:
        //         "Yes. We mandate that all partner companies provide verified salary ranges before they can post an opening on our platform.",
        //       title: "Are the salary ranges listed accurate",
        //     },
        //   ],
        [
          {
            title: "How does CareerFlow match me with the right jobs?",
            content:
              "CareerFlow analyzes your skills, experience, preferences, and career goals to connect you with opportunities that closely align with your professional profile, helping you discover roles that are genuinely relevant.",
          },
          {
            title: "Can I apply to jobs directly through CareerFlow?",
            content:
              "Yes. You can apply to jobs directly from the platform, track your application status, save opportunities for later, and manage all your applications from a single dashboard.",
          },
          {
            title: "Are companies on CareerFlow verified?",
            content:
              "Absolutely. Every company goes through a verification process before posting jobs, ensuring a trustworthy environment for job seekers and reducing the risk of fraudulent listings.",
          },
          {
            title: "Can recruiters find my profile?",
            content:
              "Yes. Recruiters can discover your profile if you enable visibility settings, increasing your chances of being contacted for relevant opportunities that match your skills and experience.",
          },
          {
            title: "Is my personal information secure?",
            content:
              "We prioritize privacy and security. Your personal information is protected using industry-standard security practices, and you have full control over what information is visible to employers.",
          },
          {
            title: "What subscription plans does CareerFlow offer?",
            content:
              "CareerFlow offers free and premium plans for job seekers, along with scalable recruiter plans for companies. Premium features include enhanced visibility, advanced application tracking, and priority support.",
          },
          {
            title: "Can I track my job applications?",
            content:
              "Yes. The application dashboard lets you monitor application statuses, receive updates from recruiters, and keep your job search organized in one place.",
          },
          {
            title: "How do recruiters manage applicants?",
            content:
              "Recruiters can review applications, filter candidates, update hiring stages, communicate with applicants, and access analytics through a dedicated employer dashboard.",
          },
        ],
      title: "General",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Everything you need to know about CareerFlow, job applications,
            subscriptions, and hiring solutions.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="mx-auto max-w-4xl">
          {categories.map((category) => (
            <div key={category.title} className="mb-6">
              {/* {category.title && (
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              )} */}

              <Accordion className="space-y-4">
                {category.items.slice(0, 4).map((item, index) => (
                  <Accordion.Item
                    key={index}
                    className="overflow-hidden rounded-2xl border border-default-200 bg-background text-foreground shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <Accordion.Heading>
                      <Accordion.Trigger className="px-6 py-5 text-left font-semibold text-foreground">
                        <span>{item.title}</span>

                        <Accordion.Indicator className="text-foreground">
                          <ChevronDown
                            size={20}
                            className="transition-transform duration-300 "
                          />
                        </Accordion.Indicator>
                      </Accordion.Trigger>
                    </Accordion.Heading>

                    <Accordion.Panel>
                      <Accordion.Body className="px-6 pb-6 text-foreground/70 leading-7">
                        {item.content}
                      </Accordion.Body>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
