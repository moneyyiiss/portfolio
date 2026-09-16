import deinVideofonImg from "../assets/projects/dein-videofon.png";

export const projects = [
  {
    name: "Dein Videofon",
    tagline: "WordPress performance optimization",
    description:
      "Dein Videofon is a German WooCommerce store selling video-guestbook devices for weddings and events. I optimized the live WordPress site — page speed, asset delivery, and backend queries — without touching the existing theme or breaking any plugins.",
    features: [
      "Site speed audit and optimization on a live WooCommerce store",
      "Image and asset optimization to cut page load time",
      "Backend/query-level tuning done without a theme or plugin rewrite",
    ],
    stack: ["WordPress", "WooCommerce", "Performance", "PHP"],
    repo: null,
    demo: "https://dein-videofon.de/",
    image: deinVideofonImg,
    snippet: [
      { in: "$ optimize dein-videofon.de --wordpress" },
      { out: "assets minified · queries cached · TTFB reduced" },
    ],
  },
];
