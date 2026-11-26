const CASE_STUDY = "/Case_study_content";

function caseAsset(filename) {
  return `${CASE_STUDY}/${encodeURIComponent(filename)}`;
}

export const portfolioFilters = [
  "LinkedIn Branding",
  "Content Creation",
];

export const design = [
  {
    id: 1,
    logo: "/qasim.svg",
    img: caseAsset("Qasim Bhatti.png"),
    avatarImg: caseAsset("Qasim Profile Image.png"),
    title: "Qasim Bhatti LinkedIn Branding",
    firstName: "Qasim Bhatti",
    job: "AI Researcher",
    category: "LinkedIn Branding",
    info: "Working with Gul e Arzoo as our Brand & Profiles Manager for over a year has been a valuable part of our growth. She doesn't just manage our brand presence, she leads it, keeping our profiles, messaging, and voice consistent across platforms. She's mature, reliable in fast-moving situations, and a quick learner. As a founder, finding someone you can truly trust with your brand is rare. Gul has proven that reliability again and again. Highly recommend.",
    link: "https://www.behance.net/gallery/253538717/Brand-Profile-Management-Muhammad-Qasim-Bhatti",
  },
  {
    id: 2,
    logo: "/asad.svg",
    img: caseAsset("Asad Nazir Banner.png"),
    avatarImg: caseAsset("Asad Profile Image.png"),
    title: "Asad Nazir LinkedIn Branding",
    firstName: "Asad Nazir",
    job: "Meta Ad Strategist",
    category: "LinkedIn Branding",
    info: "Working with Arzoo on my website and profile redesign was a great experience. She has a strong eye for UI/UX and turned my ideas into clean, professional visuals that truly represent my brand. She was professional, detail-oriented, and delivered on time. Highly recommend her to anyone looking to elevate their website and personal brand.",
    link: "https://www.behance.net/gallery/253441805/LinkedIn-Profile-Design-Asad-Visibility-Redesign",
  },
  {
    id: 3,
    logo: "/usman.svg",
    img: caseAsset("Usama's Banner.png"),
    avatarImg: caseAsset("Usama profile Image.png"),
    title: "Usama Saleem LinkedIn Branding",
    firstName: "Usama Saleem",
    job: "Wordpress Developer",
    category: "LinkedIn Branding",
    info: "Working with Gul e Arzoo was a turning point for my personal brand. She doesn't just design profiles, she designs visibility with intention. From our first conversation, it was clear she understands how attention turns into trust, and trust into real opportunities. She helped me clarify my positioning, refine my LinkedIn presence, and simplify complex ideas into content that connects. Highly recommend. This is visibility done right, by design.",
    link: "https://www.behance.net/gallery/253316051/Linkedin-Profile-Revamp-Linkedin-Profile-Redesign",
  },
  {
    id: 6,
    logo: "/hani.svg",
    img: caseAsset("Hani's Banner Image.png"),
    avatarImg: caseAsset("Hani's Profile Image.png"),
    title: "Hani Elgharabawi LinkedIn Branding",
    firstName: "Hani Elgharabawi",
    job: "President & CEO at Loxala",
    category: "LinkedIn Branding",
    info: "I reached out to Gul e Arzoo for a LinkedIn profile revamp, and the results exceeded my expectations. She didn't just make my profile look better, she made it work better. Everything from the banner to the about section now tells a clear story about who I am and what I do. Within days, I saw more profile views and stronger engagement. If you want a profile that actually represents your value, she's the person to work with.",
    link: "https://www.behance.net/gallery/247441993/Linkedin-Profile-Revamp",
  },
  {
    id: 7,
    logo: "/Aseeyah.svg",
    img: caseAsset("Hasnat banner Image.png"),
    avatarImg: caseAsset("Hasnat Profile Image.png"),
    title: "Hasnat Ahmed LinkedIn Branding",
    firstName: "Hasnat Ahmed",
    job: "Personal Branding Strategist",
    category: "LinkedIn Branding",
    info: "Working with Gul was genuinely collaborative and I really enjoyed it. She redesigned my whole LinkedIn profile and built a 3-month content calendar that felt like it was made by a strategist. She understood what I was going for without me over-explaining. She didn't just organize my content, she built a full strategy around it. If you're trying to build a presence and don't know where to start, she's the person to work with.",
    link: "https://www.behance.net/gallery/252373951/Hasnat-Ahmed-(LinkedIn-Profile-Revamp)",
  },
];
