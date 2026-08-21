import type { LocalServicePageContent } from "./localServiceContent";

export type DerivedLocationProfileOptions = {
  locationSlug: string;
  locationName: string;
  region: string;
  postcodeExample: string;
  areas: readonly string[];
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function deriveLocationProfile(
  base: LocalServicePageContent,
  options: DerivedLocationProfileOptions,
): LocalServicePageContent {
  const replaceLocation = (value: string) =>
    value
      .replaceAll(base.locationName, options.locationName)
      .replaceAll(base.region, options.region);

  return {
    ...base,
    locationSlug: options.locationSlug,
    locationName: options.locationName,
    region: options.region,
    postcodeExample: options.postcodeExample,
    hero: {
      ...base.hero,
      eyebrow: `${base.servicePlural} ${options.locationName}`,
      title: `Find ${base.servicePlural.toLowerCase()} in ${options.locationName}`,
      copy: options.heroCopy,
    },
    answer: options.answer,
    jobs: base.jobs.map((job) => ({
      ...job,
      text: replaceLocation(job.text),
    })),
    costs: {
      ...base.costs,
      intro: replaceLocation(base.costs.intro),
      sourceNote: replaceLocation(base.costs.sourceNote),
      quoteTitle: replaceLocation(base.costs.quoteTitle),
      quoteIntro: replaceLocation(base.costs.quoteIntro),
      quoteTips: base.costs.quoteTips.map(replaceLocation),
    },
    localContext: options.localContext,
    areas: {
      title: `${base.servicePlural} covering ${options.locationName}`,
      items: options.areas,
      ...options.areaCopy,
    },
    how: {
      title: replaceLocation(base.how.title),
      intro: replaceLocation(base.how.intro),
      steps: base.how.steps.map((step) => ({
        title: replaceLocation(step.title),
        text: replaceLocation(step.text),
      })),
    },
    choose: {
      title: replaceLocation(base.choose.title),
      intro: replaceLocation(base.choose.intro),
      benefits: base.choose.benefits.map((benefit) => ({
        ...benefit,
        title: replaceLocation(benefit.title),
        text: replaceLocation(benefit.text),
      })),
    },
    faq: options.faq,
    cta: options.cta,
  };
}
