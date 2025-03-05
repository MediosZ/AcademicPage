export const personalInfo = {
  name: "Heng Zhang",
  alias: "Tricster",
  profilePicture: "/profile.jpeg", //optional
  role: "PhD Student",
  university: "University of British Columbia",
  universityWebsite: "https://www.ubc.ca/",
  socialMedia: [
    { name: "Email", url: "mailto:mediosrity@gmail.com" },
    { name: "Twitter", url: "https://x.com/Mediosrity" },
    {
      name: "GitHub",
      url: "https://github.com/MediosZ",
    },
    // { name: "LinkedIn", url: "https://linkedin.com" },
    // { name: "ORCID", url: "https://orcid" },
    // { name: "Google Scholar", url: "https://scholar.google.com" },
  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: "Graphics researcher",
};

export const navigations = [
  // { name: "Projects", route: "/projects" },
  { name: "Publications", route: "/publications" },
  { name: "News", route: "/news" },
  { name: "CV", route: "/cv/cv.pdf" },
];

export const homepageSection = {
  AboutSection: true,
  NewsSection: true,
  AwardsSection: true,
  SelectedPublicationsSection: true,
  // ProjectSection: true,
};

export const fontStyle = "sans"; // "sans" | "serif" | "mono"
