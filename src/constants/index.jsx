import {RiFolderTransferLine} from "react-icons/ri";
import {FaHands, FaDigitalOcean} from "react-icons/fa";
import {CgFormatLineHeight} from "react-icons/cg";
import {MdHealthAndSafety} from "react-icons/md";
import {TbTruckReturn} from "react-icons/tb";

import service1 from "../assets/services1.webp";
import service2 from "../assets/services2.webp";
import service3 from "../assets/services3.webp";
import service4 from "../assets/services4.webp";
import service5 from "../assets/services5.webp";
import service6 from "../assets/services6.webp";
import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

export const LINKS = [
	{href: "#services", label: "Services"},
	{href: "#features", label: "Features"},
	{href: "#pricing", label: "Pricing"},
	{href: "#testimonials", label: "Testimonials"},
];

export const HERO_CONTENT = {
	tagLine: "From old school to modern",
	mainHeading: "Retro Metamorphosis",
	subHeading:
		"Transform your treasured analogue recordings into easily accessible digital files. Preserving your memories and making them simple to share and enjoy.",
	callToAction: {
		primary: "Our Services",
		secondary: "Get A Quote",
	},
	formatsConverted: "Transcription Services",
};

export const MARQUEE_TEXT =
	"VHS - Betamax - Vinyl - Cassette - 8 Track - Reel-to-Reel - Microcassette - U-matic - 8mm film -";

export const SERVICES = {
	sectionTitle: "Services",
	sectionDescription: "Treasured Memories, Beautifully Re-imagined.",
	service: [
		{
			title: "Cassette to Digital",
			description:
				"Bring your old mix-tapes, voice recordings, and family audio back to life with high-fidelity digital transfers.",
			imageSrc: service1,
			imageAlt: "Cassette Tapes",
		},
		{
			title: "Vinyl to Digital",
			description:
				"Capture the warmth and character of your record collection with professional-grade audio digitization.",
			imageSrc: service2,
			imageAlt: "Vinyl Records",
		},
		{
			title: "VHS to Digital",
			description:
				"Convert your home videos and cherished moments from VHS tapes into shareable, long-lasting digital files.",
			imageSrc: service3,
			imageAlt: "VHS Tapes",
		},
		{
			title: "Film Reels to Digital (8mm/16mm)",
			description:
				"Preserve vintage home movies with frame-by-frame digital transfers for crisp playback and lasting quality.",
			imageSrc: service4,
			imageAlt: "8mm Film",
		},
		{
			title: "8-Track to Digital",
			description:
				"Relive the golden age of music by converting your classic 8-track tapes into clean, accessible digital audio files.",
			imageSrc: service5,
			imageAlt: "8-track Tapes",
		},
		{
			title: "Reel-to-Reel to Digital",
			description:
				"Preserve high-quality analog recordings from reel-to-reel tapes with precision transfers that maintain their original richness.",
			imageSrc: service6,
			imageAlt: "Reel-to-Reel Tapes",
		},
	],
};

export const FEATURES_CONTENT = {
	sectionTitle: "Why Choose Us",
	sectionDescription:
		"Our service combines expert care, advanced technology, and flexible delivery to preserve your memories with precision and heart.",
	features: [
		{
			id: 1,
			icon: <RiFolderTransferLine className="w-8 h-8" />,
			title: "Professional-Grade Transfers",
			description:
				"We use broadcast-quality equipment to ensure the best possible sound and image fidelity.",
		},
		{
			id: 2,
			icon: <FaHands className="w-8 h-8" />,
			title: "Gentle Media Handling",
			description:
				"Your originals are treated with extreme care, using safe, non-destructive processes at every step.",
		},
		{
			id: 3,
			icon: <CgFormatLineHeight className="w-8 h-8" />,
			title: "Format Versatility",
			description:
				"From VHS and cassette to reel-to-reel and 8-track, we handle a wide range of audio and video formats.",
		},
		{
			id: 4,
			icon: <FaDigitalOcean className="w-8 h-8" />,
			title: "Digital Delivery Options",
			description:
				"Receive your files via cloud download, USB, or custom DVD—your choice, your convenience.",
		},
		{
			id: 5,
			icon: <MdHealthAndSafety className="w-8 h-8" />,
			title: "Quality Control Review",
			description:
				"Every file is checked for clarity, completeness, and synchronization before delivery.",
		},
		{
			id: 6,
			icon: <TbTruckReturn className="w-8 h-8" />,
			title: "Secure Returns",
			description:
				"Your original media is carefully packaged and returned promptly after conversion.",
		},
	],
};

export const PRICING_CONTENT = {
	sectionTitle: "Choose Your Plan",
	sectionDescription: "Ret-Met offers flexible pricing plans to your needs.",
	popularBadge: "Most Popular",
	ctaText: "Get Started",
	plans: [
		{
			name: "Basic Transfer",
			price: "$49 / per item",
			description:
				"Ideal for small projects or single tapes with straightforward conversion needs.",
			features: [
				"Up to 2 hours of content",
				"Includes VHS, cassette, or 8-track",
				"Standard MP4 or MP3 digital file",
				"Return shipping of original media included",
			],
		},
		{
			name: "Standard Archive",
			price: "$129 / up to 5 items",
			description:
				"Perfect for families preserving a handful of cherished memories.",
			features: [
				"Mix and match formats",
				"Up to 10 hours total content",
				"USB drive or cloud delivery included",
				"Basic noise reduction and image stabilization",
			],
			popular: true,
		},
		{
			name: "Premium Legacy Pack",
			price: "$299 / up to 15 items",
			description:
				"Best value for comprehensive preservation of family archives or collections.",
			features: [
				"Any format accepted",
				"Up to 30 hours of content",
				"Advanced enhancement",
				"Includes USB drive and cloud backup",
			],
		},
	],
};

export const TESTIMONIALS_CONTENT = {
	sectionTitle: "What Our Customers Say",
	sectionDescription:
		"Hear from some of our customers who used Ret-Met to bring their analogue memories back to life.",
	reviews: [
		{
			name: "Diane R",
			location: "San Diego, CA",
			review:
				"I hadn’t seen my wedding video in over 30 years—now I can share it with my grand kids on my phone. I cried happy tears. Thank you!",
			image: user1,
		},
		{
			name: "Marcus T",
			location: "Richmond, VA",
			review:
				"You treated my dad’s old audio tapes like treasures. Hearing his voice again meant the world to us.",
			image: user2,
		},
		{
			name: "Sophie K",
			location: "Brooklyn, NY",
			review:
				"I was worried my old VHS tapes wouldn’t survive the transfer, but everything came back looking and sounding amazing!",
			image: user3,
		},
		{
			name: "James L",
			location: "Portland, OR",
			review:
				"From start to finish, the process was simple and reassuring. Our family films are now safely backed up and ready for future generations.",
			image: user4,
		},
		{
			name: "Angela D",
			location: "Denver, CO",
			review:
				"Thank you for preserving the only footage we had of my parents together. Your work is priceless.",
			image: user5,
		},
		{
			name: "Elliot M",
			location: "Chicago, IL",
			review:
				"The care and detail you put into converting my Super 8 reels was incredible. You didn’t just digitize film—you saved memories.",
			image: user6,
		},
	],
};

export const FOOTER_CONTENT = {
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
	platformsText:
		"Formats We Support | VHS | Cassette | Vinyl | 8-Track | Film Reels | Slides",
	copyrightText: "© 2026 Retro Metamorphosis. All rights reserved.",
};
