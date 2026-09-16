import deinVideofonImg from "../assets/projects/dein-videofon.webp";
import autoserviceWennesImg from "../assets/projects/autoservice-wennes.webp";
import minibaggerImg from "../assets/projects/minibagger-brinkmann.webp";
import musikvereinImg from "../assets/projects/musikverein-heede.webp";
import sanierungskostenplanImg from "../assets/projects/sanierungskostenplan.webp";
import maRoomImg from "../assets/projects/ma-room.webp";
import kanneHunfeldImg from "../assets/projects/kanne-hunfeld.webp";

export const projects = [
  {
    name: "MaRoom",
    tagline: "Full site restructure — furnished housing",
    status: "live",
    description:
      "MaRoom offers furnished apartments for professionals and corporate clients across Germany. I fully restructured the existing site — information architecture, page flow, and the availability-check booking path — rather than a surface redesign.",
    features: [
      "Full restructure of site architecture and page flow, not a reskin",
      "Availability-check booking flow rebuilt for clarity",
      "Bilingual site: German and English",
    ],
    stack: ["Web Development", "Bilingual (DE/EN)"],
    languages: ["German", "English"],
    repo: null,
    demo: "https://ma-room.de/",
    image: maRoomImg,
    snippet: [
      { in: "$ restructure ma-room.de --full" },
      { out: "IA rebuilt · booking flow simplified" },
    ],
  },
  {
    name: "Sanierungskostenplan.de",
    tagline: "Renovation cost planning service",
    status: "live",
    description:
      "A service site for a construction engineer who prepares bank-ready renovation cost breakdowns for property buyers. Built the site around a clear conversion funnel — services, pricing tiers, and a document submission flow for clients.",
    features: [
      "Conversion-focused layout: services, pricing tiers, process",
      "Client document submission flow",
      "Built and shipped to the client's own domain",
    ],
    stack: ["Web Development", "German localization"],
    languages: ["German"],
    repo: null,
    demo: "https://sanierungskostenplan.de/",
    image: sanierungskostenplanImg,
    snippet: [
      { in: "$ deploy sanierungskostenplan.de --prod" },
      { out: "live · DNS propagated" },
    ],
  },
  {
    name: "Dein Videofon",
    tagline: "WordPress performance optimization",
    status: "live",
    description:
      "Dein Videofon is a German WooCommerce store selling video-guestbook devices for weddings and events. I optimized the live WordPress site — page speed, asset delivery, and backend queries — without touching the existing theme or breaking any plugins.",
    features: [
      "Site speed audit and optimization on a live WooCommerce store",
      "Image and asset optimization to cut page load time",
      "Backend/query-level tuning done without a theme or plugin rewrite",
    ],
    stack: ["WordPress", "WooCommerce", "Performance", "PHP"],
    languages: ["German"],
    repo: null,
    demo: "https://dein-videofon.de/",
    image: deinVideofonImg,
    snippet: [
      { in: "$ optimize dein-videofon.de --wordpress" },
      { out: "assets minified · queries cached · TTFB reduced" },
    ],
  },
  {
    name: "Landhaus Kanne-Hunfeld",
    tagline: "WordPress site for an event venue & restaurant",
    status: "live",
    description:
      "A 200-year-old family-run manor house in Heede, Germany, operating as an event venue and restaurant with three distinct spaces for weddings, parties, and conferences. Built the WordPress site around venue browsing, the menu, and table reservations.",
    features: [
      "Three venue spaces presented with dedicated pages",
      "Table reservation and event inquiry flow",
      "Regional-cuisine menu section, German-language build",
    ],
    stack: ["WordPress", "Responsive Design"],
    languages: ["German"],
    repo: null,
    demo: "https://kanne-hunfeld.de/",
    image: kanneHunfeldImg,
    snippet: [
      { in: "$ deploy kanne-hunfeld.de --prod" },
      { out: "live · DNS propagated" },
    ],
  },
  {
    name: "Autoservice Wennes",
    tagline: "WordPress site for a car repair workshop",
    status: "staging",
    description:
      "Autoservice Wennes is an independent car workshop in Heede, Germany specializing in VW, Audi, Seat, Cupra, Škoda, and MAN vehicles. Built the full WordPress site — services, a vehicle configurator, fleet listing, and appointment requests — currently in staging ahead of launch.",
    features: [
      "Service and appointment-request pages built around local SEO",
      "Vehicle configurator and fleet ('Fuhrpark') listing",
      "Fully responsive, German-language WordPress build",
    ],
    stack: ["WordPress", "Responsive Design"],
    languages: ["German"],
    repo: null,
    demo: "https://autoservice-wennes2.zerix.online/",
    image: autoserviceWennesImg,
    snippet: [
      { in: "$ wp status --site autoservice-wennes" },
      { out: "staging · awaiting client go-live" },
    ],
  },
  {
    name: "Minibaggerarbeiten Brinkmann",
    tagline: "WordPress site for an excavation contractor",
    status: "staging",
    description:
      "A site for Thorsten Brinkmann's excavation and earthwork business in Heede, Germany. Built as a lead-generation WordPress site — services, service area, and a direct contact path — currently in staging.",
    features: [
      "Service breakdown: excavation, compaction, trench work",
      "Direct call-to-action tuned for a one-person, local business",
      "German-language WordPress build, staging environment",
    ],
    stack: ["WordPress", "Responsive Design"],
    languages: ["German"],
    repo: null,
    demo: "https://minibagger.zerix.online/",
    image: minibaggerImg,
    snippet: [
      { in: "$ wp status --site minibagger-brinkmann" },
      { out: "staging · awaiting client go-live" },
    ],
  },
  {
    name: "Musikverein Heede Ems",
    tagline: "WordPress site for a community brass band",
    status: "staging",
    description:
      "The official site for Musikverein Heede Ems e.V., a German brass band active since 1984. Built the WordPress site covering the group's history, events, and youth music program — currently in staging.",
    features: [
      "Event and 'Aktuelles' section for the band's calendar",
      "Content structured around the club's three orchestras",
      "German-language WordPress build, staging environment",
    ],
    stack: ["WordPress", "Responsive Design"],
    languages: ["German"],
    repo: null,
    demo: "https://musikvereinheede.zerix.online/",
    image: musikvereinImg,
    snippet: [
      { in: "$ wp status --site musikverein-heede" },
      { out: "staging · awaiting client go-live" },
    ],
  },
];
