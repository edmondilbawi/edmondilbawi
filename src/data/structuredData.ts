import {
  educationEntries,
  profile,
  projects,
  type Project
} from "@/data/portfolioContent";
import { SITE_URL, siteRouteUrl } from "@/data/siteMetadata";

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;

const university = educationEntries.find(
  ({ institution }) => institution === "University of Balamand"
);

const projectTechnicalDetails: Record<
  Project["preview"]["kind"],
  Record<string, string | string[]>
> = {
  bloodlink: {
    runtimePlatform: "Node.js"
  },
  "banking-system": {
    programmingLanguage: "C",
    runtimePlatform: "POSIX"
  },
  "social-platform": {
    programmingLanguage: "C++"
  }
};

const projectNodes = projects.map((project) => ({
  "@type": "SoftwareSourceCode",
  "@id": `${SITE_URL}/#project-${project.preview.kind}`,
  name: project.title,
  description: project.description,
  creator: {
    "@id": personId
  },
  isPartOf: {
    "@id": websiteId
  },
  keywords: project.techStack.join(", "),
  ...projectTechnicalDetails[project.preview.kind],
  ...(project.repositoryUrl
    ? {
        url: project.repositoryUrl,
        codeRepository: project.repositoryUrl
      }
    : {})
}));

export const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      url: siteRouteUrl(),
      email: profile.email,
      description: profile.subtitle,
      sameAs: [profile.githubUrl, profile.linkedinUrl],
      ...(university
        ? {
            affiliation: {
              "@type": "CollegeOrUniversity",
              name: university.institution
            }
          }
        : {})
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: "Edmond Ilbawi Portfolio",
      url: siteRouteUrl(),
      description:
        "Personal portfolio of Edmond Ilbawi, a Computer Science student showcasing software projects, experience, and 21% Loaded reflections.",
      inLanguage: "en",
      author: {
        "@id": personId
      },
      hasPart: projectNodes.map((project) => ({
        "@id": project["@id"]
      }))
    },
    ...projectNodes
  ]
};
