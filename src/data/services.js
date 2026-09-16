export const services = [
  {
    title: "Backend API development",
    description:
      "REST APIs built in Spring Boot or Django — auth, business logic, and data validation, structured to handle real traffic, not just a demo.",
    icon: "api",
    includes: [
      "API design — routes, request/response shapes, error handling",
      "Auth: token-based or role-scoped, depending on the app",
      "Input validation and consistent error responses",
    ],
    example: "Apra Nova Backend",
  },
  {
    title: "Database design & integration",
    description:
      "Schema design and ORM setup with MySQL, MongoDB, and Hibernate — modeling data so queries stay fast as the dataset grows.",
    icon: "db",
    includes: [
      "Schema design from your actual data, not a generic template",
      "ORM setup (Hibernate / Mongoose-equivalent) wired to the API layer",
      "Indexing and query review as data volume grows",
    ],
    example: "MongoDB Web API",
  },
  {
    title: "Third-party & system integration",
    description:
      "Connecting your app to payment gateways, external APIs, or a client's existing system, with sync jobs that keep both sides consistent.",
    icon: "sync",
    includes: [
      "Integration with external APIs (payments, SMS, third-party data)",
      "Background sync jobs between two systems of record",
      "Webhook handling for events coming from outside your app",
    ],
    example: "Customer CRUD & Sync",
  },
  {
    title: "Containerized deployment",
    description:
      "Dockerizing an existing backend and setting up a repeatable deployment path, so shipping isn't a manual, one-person ritual.",
    icon: "docker",
    includes: [
      "Dockerfile + docker-compose for your existing backend",
      "Environment config separated from code (no hardcoded secrets)",
      "A deploy path your team can repeat without you in the room",
    ],
    example: "Apra Nova Backend",
  },
];
