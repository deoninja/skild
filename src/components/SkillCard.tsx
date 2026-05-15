import { Link } from "@tanstack/react-router";
import {
	ArrowBigUp,
	ArrowUpRight,
	Bookmark,
	Check,
	Copy,
	MessageSquare,
} from "lucide-react"; // Import icons
import { useState } from "react";
import type { GetSkillsData } from "#/dataconnect-generated";

// import type { SkillRecord } from "../../type";

type SkillCardProps = GetSkillsData["skills"][number];

const SkillCard = ({
	description,
	title,
	createdAt,
	installCommand,
	tags,
	author,
}: SkillCardProps) => {
	const [isCopied, setIsCopied] = useState(false);
	const category = tags[0] ?? "General";
	// Generate a slug from the title for routing
	const slug = title.toLowerCase().replace(/\s+/g, "-");

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(installCommand);
			setIsCopied(true);
			// Reset the "copied" state after 2 seconds
			setTimeout(() => setIsCopied(false), 2000);
		} catch (err) {
			setIsCopied(false);
			console.error("Failed to copy command:", err);
		}
	};

	return (
		<article className="skill-card">
			<Link
				to={`/skill/${slug}`}
				tabIndex={-1}
				aria-label={`Open ${title}`}
				className="overlay"
			/>
			<div className="chrome">
				<div className="chrome-bar">
					<div className="lights">
						<div className="light red"></div>
						<div className="light amber"></div>
						<div className="light green"></div>
					</div>
					<div className="host">registry.sh</div>
				</div>
			</div>
			<div className="body">
				<div className="meta">
					<div className="author">
						<img
							src={author.imageUrl || "/logo512.png"}
							alt={`${author.username}'s avatar`}
							className="avatar"
						/>
						<div className="author-copy">
							<p>{author.username}</p>
							<p>
								{createdAt
									? new Date(createdAt as string).toLocaleDateString()
									: "Unknown date"}
							</p>
						</div>
					</div>
					<p className="category">{category}</p>
				</div>
				<div className="summary">
					<Link to={"/skills"} className="title-link">
						<h3>{title}</h3>
					</Link>
					<p>{description}</p>
				</div>
				<div className="command">
					<div className="command-copy">
						<span>{">_"}</span>
						<p>{installCommand}</p>
					</div>
					<button
						type="button"
						className="copy"
						onClick={handleCopy}
						aria-label="Copy command to clipboard"
						data-copied={isCopied ? "true" : undefined}
					>
						{isCopied ? (
							<Check size={16} className="text-green-500" />
						) : (
							<Copy size={16} className="text-gray-500" />
						)}
					</button>
				</div>

				<div className="footer">
					<div className="stats">
						<button type="button" className="upvote" disabled>
							<ArrowBigUp size={16} fill="currentColor" />
							<span>{tags.length}</span>
						</button>
						<div className="comments">
							<MessageSquare size={14} />
							<span>{author.email ? 1 : 0}</span>
						</div>
					</div>
					<div className="actions">
						<Link
							to={`/skill/${slug}`}
							className="open"
							title={`Open ${title}`}
						>
							<span>Open</span>
							<ArrowUpRight size={14} />
						</Link>
						<button
							type="button"
							className="save"
							aria-label="Saved state"
							disabled
						>
							<Bookmark size={16} />
						</button>
					</div>
				</div>
			</div>
		</article>
	);
};

export default SkillCard;
