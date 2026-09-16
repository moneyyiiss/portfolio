export const projects = [
  {
    name: "Apra Nova Backend",
    tagline: "Django API platform",
    description:
      "REST API platform built with Django, containerized for deployment. Client backend project covering auth, data models, and a Dockerized deployment pipeline.",
    features: [
      "Token-based auth with role-scoped endpoints",
      "Dockerfile + compose setup for repeatable deploys",
      "Structured for a multi-client backend, not a single demo",
    ],
    stack: ["Python", "Django", "Docker", "REST API"],
    repo: "https://github.com/moneyyiiss/apra-nova-backend-main",
    demo: null,
    snippet: [{ in: "POST /api/v1/auth/login" }, { out: "200 · token issued" }],
  },
  {
    name: "Healthcare Platform",
    tagline: "Doctor–patient matching backend",
    description:
      "Backend system for a healthcare platform connecting doctors with patients — search by symptom and location, built on Spring Boot with a live demo deployment.",
    features: [
      "Symptom + location based doctor search",
      "Spring Boot REST layer over a relational schema",
      "Deployed with a working live demo",
    ],
    stack: ["Java", "Spring Boot"],
    repo: "https://github.com/moneyyiiss/healthcareplatform",
    demo: "https://moneyyiiss.github.io/healthcareplatform/",
    snippet: [{ in: "GET /doctors?symptom=fever&city=pune" }, { out: "3 matches · sorted by distance" }],
  },
  {
    name: "Customer CRUD & Sync",
    tagline: "Full CRUD with remote sync",
    description:
      "Customer management application — create, update, delete, and search customer records, with a background sync layer that keeps data consistent with a remote API.",
    features: [
      "Full CRUD over customer records",
      "Background job syncing local data with a remote API",
      "Frontend + backend in the same repo",
    ],
    stack: ["Java", "Spring Boot", "JavaScript", "HTML/CSS"],
    repo: "https://github.com/moneyyiiss/customercrud_assignment",
    demo: null,
    snippet: [{ in: "PUT /customers/482" }, { out: "updated · synced with remote API" }],
  },
  {
    name: "Listenify",
    tagline: "Console-based music streaming app",
    description:
      "A Spotify-inspired console application in Java — browse a song catalog, build playlists, and manage a listening queue, built to practice core OOP design.",
    features: [
      "Playlist and queue management, modeled with core OOP",
      "Console UI over a structured song catalog",
      "Built as a design exercise, not a tutorial clone",
    ],
    stack: ["Java", "OOP"],
    repo: "https://github.com/moneyyiiss/Listenify_Application",
    demo: null,
    snippet: [{ in: "> queue add \"Kesariya\"" }, { out: "added · now playing next" }],
  },
  {
    name: "AI News Analysis",
    tagline: "Python news analysis tool",
    description:
      "A Python tool that pulls and analyzes news content to surface patterns and summaries, built while exploring practical applications of NLP tooling.",
    features: [
      "Pulls and parses news content programmatically",
      "Groups articles into clusters for quick scanning",
      "Exploration of practical NLP tooling in Python",
    ],
    stack: ["Python", "NLP"],
    repo: "https://github.com/moneyyiiss/news_analysis_ai",
    demo: null,
    snippet: [{ in: "$ python analyze.py --source rss" }, { out: "42 articles · 5 clusters found" }],
  },
  {
    name: "Image Encryption Tool",
    tagline: "File-level image security",
    description:
      "A desktop Java application for encrypting and decrypting image files with a user-supplied key, wrapped in a simple point-and-click interface.",
    features: [
      "Key-based encryption/decryption of image files",
      "Simple desktop UI — no command-line needed",
      "Built to understand file-level encryption in Java",
    ],
    stack: ["Java", "Security"],
    repo: "https://github.com/moneyyiiss/Image-Encryption-Decryption",
    demo: null,
    snippet: [{ in: "$ encrypt --key **** photo.png" }, { out: "photo.png.enc written" }],
  },
  {
    name: "Bank Application System",
    tagline: "Multi-bank console banking system",
    description:
      "A console-based banking system implementing core OOP concepts — one main bank (RBI) coordinating two local banks (Lotak Bank and SBI), each with their own accounts and transactions.",
    features: [
      "Three-bank structure: one central bank, two local banks",
      "Account creation, deposits, withdrawals, and transfers",
      "Built to practice inheritance and encapsulation in Java",
    ],
    stack: ["Java", "OOP"],
    repo: "https://github.com/moneyyiiss/Bank_Application_System",
    demo: null,
    snippet: [{ in: "> transfer 5000 lotak->sbi" }, { out: "approved by RBI · balance updated" }],
  },
  {
    name: "Spotify Clone",
    tagline: "Web music player UI",
    description:
      "A web application replicating core Spotify features — browsing and playing music through a sleek, familiar interface built with HTML, CSS, and JavaScript.",
    features: [
      "Browsable song library with a working audio player",
      "UI closely modeled on Spotify's layout and interactions",
      "Pure HTML/CSS/JS, no framework overhead",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/moneyyiiss/SpotifyClone",
    demo: null,
    snippet: [{ in: "> play \"Shape of You\"" }, { out: "streaming · 0:00 / 3:53" }],
  },
  {
    name: "Airline Reservation System",
    tagline: "Flight booking console app",
    description:
      "A Java console application for booking and managing airline reservations — searching flights, selecting seats, and handling cancellations.",
    features: [
      "Flight search and seat selection flow",
      "Booking and cancellation handling",
      "Modeled as a real reservation workflow, not a toy CRUD",
    ],
    stack: ["Java"],
    repo: "https://github.com/moneyyiiss/Airline-Reservation",
    demo: null,
    snippet: [{ in: "> book PNQ-DEL seat 14A" }, { out: "confirmed · PNR: 7F3KX9" }],
  },
  {
    name: "OTP Verification Service",
    tagline: "SMS OTP via Twilio",
    description:
      "A Java backend service that generates, sends, and verifies one-time passwords over SMS using the Twilio API — the kind of auth step most apps outsource.",
    features: [
      "OTP generation with expiry handling",
      "SMS delivery through the Twilio API",
      "Verification endpoint separate from generation",
    ],
    stack: ["Java", "Twilio API"],
    repo: "https://github.com/moneyyiiss/twilio_otp",
    demo: null,
    snippet: [{ in: "POST /otp/send" }, { out: "sent to +91••••••210" }],
  },
  {
    name: "File System Organizer",
    tagline: "Automated file sorting tool",
    description:
      "A Node.js tool that scans a messy folder and automatically sorts files into organized subfolders by type — built to solve an actual cluttered-downloads problem.",
    features: [
      "Scans a directory and classifies files by type",
      "Moves files into auto-created category folders",
      "A real utility, run on an actual Downloads folder",
    ],
    stack: ["JavaScript", "Node.js"],
    repo: "https://github.com/moneyyiiss/File_System_Organizer",
    demo: null,
    snippet: [{ in: "$ node organize.js ~/Downloads" }, { out: "212 files sorted into 8 folders" }],
  },
  {
    name: "MongoDB Web API",
    tagline: ".NET Web API over MongoDB",
    description:
      "A C# Web API demonstrating CRUD operations against a MongoDB backend — built while extending backend fundamentals beyond the Java/Spring stack.",
    features: [
      "CRUD endpoints backed by MongoDB collections",
      "Built with ASP.NET Web API conventions",
      "A deliberate stretch into the .NET/NoSQL side of backend work",
    ],
    stack: ["C#", ".NET", "MongoDB"],
    repo: "https://github.com/moneyyiiss/MongoDbWebApi",
    demo: null,
    snippet: [{ in: "GET /api/items/5" }, { out: "200 · document returned" }],
  },
  {
    name: "QR Code Generator",
    tagline: "Python QR utility",
    description:
      "A small Python script that turns any text or URL into a downloadable QR code — the kind of one-off utility that ends up reused constantly.",
    features: [
      "Generates a QR code image from text or a URL",
      "Simple script interface, no server required",
      "Built as a quick, reusable utility",
    ],
    stack: ["Python"],
    repo: "https://github.com/moneyyiiss/qr_code_generator_python",
    demo: null,
    snippet: [{ in: "$ python qr.py \"github.com/moneyyiiss\"" }, { out: "qr.png saved" }],
  },
];
