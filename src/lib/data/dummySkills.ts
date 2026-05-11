import type { SkillRecord } from "../../type";

export const dummySkills: SkillRecord[] = [
  {
    id: "skill-001",
    title: "TypeScript Proficiency",
    slug: "typescript-proficiency",
    description:
      "Demonstrated ability to write type-safe, maintainable JavaScript using TypeScript.",
    category: "Programming Languages",
    tags: ["frontend", "backend", "typing", "interfaces", "generics"],
    installCommand: "npm install typescript --save-dev",
    createdAt: "2023-11-15T10:30:00Z",
    authorClerkId: "clerk_abc123",
    authorEmail: "alex.dev@example.com",
  },
  {
    id: "skill-002",
    title: "React State Management",
    slug: "react-state-management",
    description:
      "Expertise in managing complex UI state using Redux, Zustand, or Context API.",
    category: "Frontend Frameworks",
    tags: ["react", "hooks", "state", "optimization", "performance"],
    installCommand: "npm install react-redux @reduxjs/toolkit",
    createdAt: "2023-12-02T14:20:00Z",
    authorClerkId: "clerk_def456",
    authorEmail: "sam.builder@example.com",
  },
  {
    id: "skill-003",
    title: "Docker Containerization",
    slug: "docker-containerization",
    description:
      "Packaging applications and dependencies into portable containers using Docker.",
    category: "DevOps & Tools",
    tags: ["containers", "CI/CD", "microservices", "images", "networking"],
    installCommand: "docker pull node:20-alpine",
    createdAt: null,
    authorClerkId: "clerk_ghi789",
    authorEmail: "jamie.ops@example.com",
  },
  {
    id: "skill-004",
    title: "API Security Best Practices",
    slug: "api-security-best-practices",
    description:
      "Implementing secure authentication, authorization, and threat mitigation in REST/GraphQL APIs.",
    category: "Backend & Security",
    tags: ["oauth2", "jwt", "rate-limiting", "input-validation", "tls"],
    installCommand: "npm install express-rate-limit helmet joi",
    createdAt: "2024-01-10T09:15:00Z",
    authorClerkId: "clerk_jkl012",
    authorEmail: "taylor.secure@example.com",
  },
  {
    id: "skill-005",
    title: "GraphQL with Apollo Server",
    slug: "graphql-apollo-server",
    description:
      "Building flexible, efficient APIs using GraphQL and Apollo Server in Node.js.",
    category: "Backend & APIs",
    tags: ["graphql", "resolvers", "schema", "subscriptions", "caching"],
    installCommand: "npm install apollo-server graphql",
    createdAt: "2024-02-28T16:45:00Z",
    authorClerkId: null,
    authorEmail: null,
  },
];
