import deinVideofonImg from "../assets/projects/dein-videofon.webp";
import autoserviceWennesImg from "../assets/projects/autoservice-wennes.webp";
import minibaggerImg from "../assets/projects/minibagger-brinkmann.webp";
import musikvereinImg from "../assets/projects/musikverein-heede.webp";
import sanierungskostenplanImg from "../assets/projects/sanierungskostenplan.webp";
import maRoomImg from "../assets/projects/ma-room.webp";
import kanneHunfeldImg from "../assets/projects/kanne-hunfeld.webp";
import uidaMapImg from "../assets/projects/uida-map.webp";

export const projects = [
  {
    name: "UIDA — Vahila Smart Marker Mapping",
    tagline: "Full-stack underground utility mapping platform",
    role: "Full-Stack Developer (Mobile + Backend)",
    description: [
      "A field survey platform for detecting and mapping underground utilities — water, power, gas, telecom, and sanitary lines — by scanning RFID tags with a handheld BLE reader and logging RTK-accurate GPS coordinates against a live map.",
      "I built the Flutter field app end-to-end — BLE tag scanning, offline-first data capture, and the map view surveyors use on-site — plus the Node.js/Express API it syncs with, covering auth, project and device management, and real-time updates across devices. Delivered under an active client NDA, so specifics here are kept to the technical scope.",
    ],
    features: [
      "Flutter app: BLE tag scanning, offline-first sync, live map view with per-utility markers",
      "Node.js/Express API on PostgreSQL, Redis, and Socket.io for real-time multi-device sync",
      "Manages dozens of concurrent survey projects with per-project tag and device tracking",
    ],
    stack: ["Flutter", "Dart", "Node.js", "Express", "PostgreSQL", "Redis", "Socket.io", "REST APIs"],
    languages: ["English"],
    repo: null,
    demo: null,
    image: uidaMapImg,
    snippet: [
      { in: "$ scan --tag RFID:E200001D9619014613100533" },
      { out: "matched · GPS 27.3324, 88.5951 logged" },
    ],
  },
  {
    name: "MaRoom",
    tagline: "Full site restructure — furnished housing",
    role: "Web Developer (Full Site Restructure)",
    description: [
      "MaRoom offers furnished apartments for professionals and corporate clients across Germany, marketed under the line \"Just Live.\" The existing site's structure made it hard for visitors to get from landing page to a booked availability check.",
      "I restructured the site rather than reskinning it — reworked the information architecture and page flow, and rebuilt the availability-check booking path so it reads clearly in both German and English. The bilingual toggle was kept intact throughout the rebuild.",
    ],
    features: [
      "Full restructure of site architecture and page flow, not a reskin",
      "Availability-check booking flow rebuilt for clarity",
      "Bilingual site: German and English",
    ],
    stack: ["Web Development", "Information Architecture", "Bilingual (DE/EN)"],
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
    role: "Web Developer",
    description: [
      "Sanierungskostenplan.de is a one-person consulting service run by a construction engineer (Bauwirtschaftsingenieur) who prepares bank-ready renovation cost breakdowns for people buying property that needs work — the kind of document a lender wants before approving a mortgage add-on.",
      "I built the site around a single conversion path: explain the three service tiers and their pricing, walk the visitor through the process, and let them submit property documents (expose, photos, floor plans) directly to start an assessment. Shipped and running on the client's own domain.",
    ],
    features: [
      "Conversion-focused layout: services, pricing tiers, process",
      "Client document submission flow",
      "Built and shipped to the client's own domain",
    ],
    stack: ["Web Development", "Conversion Design", "German localization"],
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
    name: "Landhaus Kanne-Hunfeld",
    tagline: "WordPress site for an event venue & restaurant",
    role: "WordPress Developer",
    description: [
      "Landhaus Kanne-Hunfeld is a 200-year-old family-run manor house in Heede, Germany, run as an event venue and restaurant — weddings, birthdays, and corporate conferences across three distinct spaces (a 250-guest hall, a rustic barn, and an outdoor terrace).",
      "I built the WordPress site around the three venues, each with its own page, alongside a regional-cuisine menu section and a table-reservation and event-inquiry flow, so a couple planning a wedding or a company booking a conference can both find what they need without digging.",
    ],
    features: [
      "Three venue spaces presented with dedicated pages",
      "Table reservation and event inquiry flow",
      "Regional-cuisine menu section, German-language build",
    ],
    stack: ["WordPress", "Responsive Design", "German localization"],
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
    name: "Dein Videofon",
    tagline: "WordPress performance optimization",
    role: "WordPress Performance Engineer",
    description: [
      "Dein Videofon is a German WooCommerce store selling video-guestbook devices — a photo-booth-and-video-phone hybrid — for weddings and events. The store was live and taking orders, but slow page loads were the actual problem to fix, not a redesign.",
      "I ran a speed audit and optimized the live site: compressed and lazy-loaded assets, tuned backend queries, and cut unnecessary plugin overhead — all without touching the existing theme or breaking any of the store's plugins, since it had to keep selling while I worked.",
    ],
    features: [
      "Site speed audit and optimization on a live WooCommerce store",
      "Image and asset optimization to cut page load time",
      "Backend/query-level tuning done without a theme or plugin rewrite",
    ],
    stack: ["WordPress", "WooCommerce", "Performance Optimization", "PHP", "MySQL"],
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
    name: "Autoservice Wennes",
    tagline: "WordPress site for a car repair workshop",
    role: "WordPress Developer",
    description: [
      "Autoservice Wennes is an independent car workshop in Heede, Germany, specializing in VW, Audi, Seat, Cupra, Škoda, and MAN vehicles — running on the line \"Wenn es defekt ist, ab zu Wennes\" (if it's broken, head to Wennes).",
      "I built the full WordPress site: a service breakdown, a vehicle configurator, a fleet ('Fuhrpark') listing for their car-sales side, and an appointment-request flow tuned for local search, since most of their customers are searching from nearby the A31. Currently in staging ahead of the client's go-live.",
    ],
    features: [
      "Service and appointment-request pages built around local SEO",
      "Vehicle configurator and fleet ('Fuhrpark') listing",
      "Fully responsive, German-language WordPress build",
    ],
    stack: ["WordPress", "Responsive Design", "Local SEO"],
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
    role: "WordPress Developer",
    description: [
      "Minibaggerarbeiten Brinkmann is Thorsten Brinkmann's one-person excavation and earthwork business in Heede, Germany, specializing in compact machinery for tight residential and commercial sites.",
      "This is a lead-generation build, not a catalog — a clear service breakdown (excavation, compaction, trench and utility line work), the service area, and a direct call/contact path, since a one-person business lives or dies on how fast someone can reach the owner. Currently in staging.",
    ],
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
    role: "WordPress Developer",
    description: [
      "Musikverein Heede Ems e.V. is a German community brass band active since 1984, with over 50 members across three orchestras, performing at Schützenfeste and classical concerts under the line \"Hier spielt die Musik!\"",
      "I built the WordPress site around the club's history, an events and 'Aktuelles' section for their calendar, and content structured around all three orchestras and their youth development program — a volunteer-run club site that needed to be easy for non-technical members to keep updated. Currently in staging.",
    ],
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
