export const SITE_ORIGIN = "https://edmondilbawi.github.io";
export const SITE_BASE_PATH = "/edmondilbawi";
export const SITE_URL = `${SITE_ORIGIN}${SITE_BASE_PATH}`;

export const SITE_TITLE = "Edmond Ilbawi | Computer Science Portfolio";
export const SITE_DESCRIPTION =
  "Computer Science student focused on analytical problem solving, decision making, and building practical software systems. Explore Edmond Ilbawi’s projects, experience, and 21% Loaded reflection journey.";

export const SITE_AUTHOR = "Edmond Ilbawi";
export const SITE_OG_IMAGE_URL = `${SITE_URL}/images/edmond-ilbawi-og.jpg`;

export function siteOpenGraphImage() {
  return {
    url: SITE_OG_IMAGE_URL,
    width: 1200,
    height: 630,
    alt: "Edmond Ilbawi — Computer Science Portfolio"
  };
}

export function siteRouteUrl(path = "") {
  const normalizedPath = path.replace(/^\/+|\/+$/g, "");
  return normalizedPath ? `${SITE_URL}/${normalizedPath}/` : `${SITE_URL}/`;
}
