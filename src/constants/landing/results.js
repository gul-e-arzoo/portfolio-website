const PLAN_SECTION = "/home_page/what_this_plan_can_do_section";

export const resultsIntro = {
  badge: "The results",
  title: "Real numbers from real profiles",
  subtitle:
    "Screenshots from LinkedIn analytics. No mock-ups, no made-up numbers.",
};

export const resultsAnalyticsImages = [
  {
    id: "content-a",
    src: `${PLAN_SECTION}/image_1.png`,
    alt: "Content performance — impressions",
  },
  {
    id: "content-b",
    src: `${PLAN_SECTION}/image_2.png`,
    alt: "Content performance — impressions",
  },
  {
    id: "engagement-a",
    src: `${PLAN_SECTION}/image_3.png`,
    alt: "Engagement analytics",
  },
  {
    id: "engagement-b",
    src: `${PLAN_SECTION}/image_4.png`,
    alt: "Engagement analytics",
  },
];

export const resultsTopPostsImage = {
  src: `${PLAN_SECTION}/image_5.png`,
  alt: "Top performing posts on LinkedIn",
};

const PACKAGE_REVIEWS = "/home_page/what_this_package_can_do_section";

/** Header above LinkedIn review wall (same as reference) */
export const packageReviewsIntro = {
  badge: "From my community",
  title: "What my community says",
  subtitle:
    "Notes from people in my community who learned LinkedIn design and content with me.",
};

export const packageReviewImages = Array.from({ length: 13 }, (_, index) => {
  const n = index + 1;
  return {
    id: `review-${n}`,
    src: `${PACKAGE_REVIEWS}/review_${n}.png`,
    alt: `LinkedIn client review ${n}`,
  };
});
