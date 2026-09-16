export const projects = [
  {
    name: "Apra Nova Backend",
    tagline: "Django API platform",
    description:
      "REST API platform built with Django, containerized for deployment. Client backend project covering auth, data models, and a Dockerized deployment pipeline.",
    stack: ["Python", "Django", "Docker", "REST API"],
    repo: "https://github.com/moneyyiiss/apra-nova-backend-main",
    demo: null,
    snippet: [
      { in: "POST /api/v1/auth/login" },
      { out: "200 · token issued" },
    ],
  },
  {
    name: "Healthcare Platform",
    tagline: "Doctor–patient matching backend",
    description:
      "Backend system for a healthcare platform connecting doctors with patients — search by symptom and location, built on Spring Boot with a live demo deployment.",
    stack: ["Java", "Spring Boot"],
    repo: "https://github.com/moneyyiiss/healthcareplatform",
    demo: "https://moneyyiiss.github.io/healthcareplatform/",
    snippet: [
      { in: "GET /doctors?symptom=fever&city=pune" },
      { out: "3 matches · sorted by distance" },
    ],
  },
  {
    name: "Customer CRUD & Sync",
    tagline: "Full CRUD with remote sync",
    description:
      "Customer management application — create, update, delete, and search customer records, with a background sync layer that keeps data consistent with a remote API.",
    stack: ["Java", "Spring Boot", "JavaScript", "HTML/CSS"],
    repo: "https://github.com/moneyyiiss/customercrud_assignment",
    demo: null,
    snippet: [
      { in: "PUT /customers/482" },
      { out: "updated · synced with remote API" },
    ],
  },
  {
    name: "Listenify",
    tagline: "Console-based music streaming app",
    description:
      "A Spotify-inspired console application in Java — browse a song catalog, build playlists, and manage a listening queue, built to practice core OOP design.",
    stack: ["Java", "OOP"],
    repo: "https://github.com/moneyyiiss/Listenify_Application",
    demo: null,
    snippet: [
      { in: "> queue add \"Kesariya\"" },
      { out: "added · now playing next" },
    ],
  },
  {
    name: "AI News Analysis",
    tagline: "Python news analysis tool",
    description:
      "A Python tool that pulls and analyzes news content to surface patterns and summaries, built while exploring practical applications of NLP tooling.",
    stack: ["Python", "NLP"],
    repo: "https://github.com/moneyyiiss/news_analysis_ai",
    demo: null,
    snippet: [
      { in: "$ python analyze.py --source rss" },
      { out: "42 articles · 5 clusters found" },
    ],
  },
  {
    name: "Image Encryption Tool",
    tagline: "File-level image security",
    description:
      "A desktop Java application for encrypting and decrypting image files with a user-supplied key, wrapped in a simple point-and-click interface.",
    stack: ["Java", "Security"],
    repo: "https://github.com/moneyyiiss/Image-Encryption-Decryption",
    demo: null,
    snippet: [
      { in: "$ encrypt --key **** photo.png" },
      { out: "photo.png.enc written" },
    ],
  },
];
