const site = {
  // --- Site Metadata ---
  meta: {
    title: "Dan Shalev | Cybersecurity B2B Marketing Executive",
    description:
      "Cybersecurity B2B marketing executive helping companies articulate their security story.",
    author: "Dan Shalev",
    logo: "/profile.jpg",
    ogImage: "/og-image.png",
    lang: "en",
  },

  // --- Navigation ---
  navigation: [
    { name: "Home", subtitle: "Index", href: "/" },
    { name: "Writing", subtitle: "Blog", href: "/writing" },
    { name: "About", subtitle: "Me", href: "/about" },
  ],

  // --- Social Links ---
  social: [
    {
      name: "GitHub",
      href: "https://github.com/danshalev7",
      icon: "mdi:github",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shalevdan",
      icon: "mdi:linkedin",
    },
    { name: "Email", href: "mailto:dan@shalevdan.com", icon: "mdi:email" },
  ],

  // --- Homepage Hero ---
  hero: {
    greeting: "Hello, I'm Dan",
    description:
      'Full-stack growth marketer building B2B marketing engines at <span class="font-medium text-foreground underline decoration-primary/30">deep-tech</span> and <span class="font-medium text-foreground underline decoration-primary/30">cybersecurity</span> startups.',
    cards: [
      { icon: "mdi:briefcase", label: "Role", value: "Head of Marketing" },
      { icon: "mdi:map-marker", label: "Location", value: "Tel-Aviv, Israel" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2026 Dan Shalev",
    builtWith: "Built with Astro",
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
    newPostDays: 7,
  },

  // --- UI Labels ---
  labels: {
    postsTitle: "Writing",
    postsDescription:
      "B2B marketing, deep-tech go-to-market, and building with AI tools.",
    aboutTitle: "About",
    aboutDescription: "About this site and its author.",
    backToPosts: "Back to posts",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription:
      "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Post",
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search posts, tags, or commands...",
    searchNavigate: "Navigate",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
