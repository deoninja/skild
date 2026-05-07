import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";
import SkillCard from "@/components/SkillCard";
import type { SkillRecord } from "../../type";

export const Route = createFileRoute("/")({ component: App });

const dummySkills: SkillRecord[] = [
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

function App() {
	return (
		<div id="home">
			<section className="hero">
				<div className="copy">
					<h1>
						The Registry for <br />
						<span className="text-gradient">Agentic intelligence</span>
					</h1>
					<p>
						A high-performance registry for procedural agent skills. Discover,
						publish, and operate reusable agent capabilities from a route-driven
						workspace.
					</p>
				</div>
				<div className="actions">
					<Link to="/skills" className="btn-primary">
						<Terminal size={18} />
						<span>Browse Registry</span>
					</Link>
					<Link to="/skills/new" className="btn-secondary">
						Publish Skill
					</Link>
				</div>
			</section>

			<section className="latest">
				<div className="space-y-2">
					<h2>
						Recently Created
						<span className="text-gradient"> Skills</span>
					</h2>
					<p>
						Latest skills loaded from database in descending creation order.
					</p>
				</div>
				<div>
					{dummySkills.length > 0 ? (
						<div className="skills-grid">
							{dummySkills.map((skill) => (
								<SkillCard key={skill.id} {...skill} />
							))}
						</div>
					) : (
						<p>No skills have been created yet.</p>
					)}
				</div>
			</section>
		</div>
	);
}
