const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withSiteBasePath(path: string) {
  if (
    !path.startsWith("/") ||
    path.startsWith("//") ||
    path === siteBasePath ||
    path.startsWith(`${siteBasePath}/`)
  ) {
    return path;
  }

  return `${siteBasePath}${path}`;
}
