export const bgMap: Record<string, string> = {
  home: "/images/bg/home.jpg",
  "about-us": "/images/bg/about-us.png",
  services: "/images/bg/services.png",
  contact: "/images/bg/contact.png",
};

export function getBgImage(segment?: string): string | null {
  if (!segment) return bgMap.home;
  return bgMap[segment] || null;
}
