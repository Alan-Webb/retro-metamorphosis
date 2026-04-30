const Footer = () => {
	const footerContent = {
		sections: [
			{
				title: "SERVICES & FORMATS",
				links: [
					{text: "Cassette to Digital", url: "#"},
					{text: "VHS & Camcorder Conversion", url: "#"},
					{text: "Vinyl & 8-Track Transfers", url: "#"},
					{text: "Reel-to-Reel Audio Preservation", url: "#"},
					{text: "Film Reel to Digital (8mm/16mm)", url: "#"},
					{text: "Photo & Slide Scanning", url: "#"},
					{text: "Custom Archival Projects", url: "#"},
					{text: "Delivery Options & Formats", url: "#"},
				],
			},
			{
				title: "SUPPORT & RESOURCES",
				links: [
					{text: "Pricing & Packages", url: "#"},
					{text: "Bulk & Business Inquiries", url: "#"},
					{text: "Frequently Asked Questions", url: "#"},
					{text: "Our Process Explained", url: "#"},
					{text: "Newsletter Sign-Up", url: "#"},
					{text: "What's New", url: "#"},
					{text: "Gift Cards Available", url: "#"},
					{text: "Workshops & Community Events", url: "#"},
				],
			},
			{
				title: "CONNECT WITH US",
				links: [
					{text: "Facebook", url: "#"},
					{text: "Instagram", url: "#"},
					{text: "YouTube", url: "#"},
					{text: "LinkedIn", url: "#"},
					{text: "Twitter/X", url: "#"},
					{text: "Email Support", url: "#"},
					{text: "Leave a Testimonial", url: "#"},
				],
			},
			{
				title: "LEARN & EXPLORE",
				links: [
					{text: "Why Digitize Your Media?", url: "#"},
					{text: "How We Handle Your Tapes & Films", url: "#"},
					{text: "Understanding Media Degradation", url: "#"},
					{text: "Preserving Audio with Integrity", url: "#"},
					{text: "Sharing Digitized Memories", url: "#"},
					{text: "How to Store Original Media Safely", url: "#"},
					{text: "Client Stories & Case Studies", url: "#"},
				],
			},
		],
	};

	return (
		<footer className="mt-20 text-neutral-400">
			<div className="max-w-7xl mx-auto px-4 border-t border-neutral-800">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
					{footerContent.sections.map((section, index) => (
						<div key={index}>
							<h3 className="text-white font-medium mb-4">{section.title}</h3>
							<ul className="space-y-2">
								{section.links.map((link, index) => (
									<li key={index}>
										<a href={link.url}>{link.text}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="pt-8 text-center text-sm text-white">
					<div className="flex justify-between">
						<div>
							<p>
								Formats We Support | VHS | Cassette | Vinyl | 8-Track | Film
								Reels | Slides
							</p>
						</div>
						<div>
							<p>© 2026 Retro Metamorphosis. All rights reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
