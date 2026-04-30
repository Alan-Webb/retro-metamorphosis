import {RiFolderTransferLine} from "react-icons/ri";
import {FaHands, FaDigitalOcean} from "react-icons/fa";
import {CgFormatLineHeight} from "react-icons/cg";
import {MdHealthAndSafety} from "react-icons/md";
import {TbTruckReturn} from "react-icons/tb";

const Features = () => {
	const featuresContent = {
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

	return (
		<section id="features">
			<div className="max-w-7xl mx-auto px-4 mt-20">
				<div className="text-center mb-8">
					<h2 className="text-3xl lg:text-5xl mt-20 py-8 tracking-tighter bg-linear-to-t from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
						{featuresContent.sectionTitle}
					</h2>
					<p className="mt-4 text-xl">{featuresContent.sectionDescription}</p>
				</div>

				<div className="flex flex-wrap justify-between">
					{featuresContent.features.map((feature) => (
						<div
							key={feature.id}
							className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/3 p-12 ">
							<div className="flex justify-center items-center text-yellow-500 mb-6">
								{feature.icon}
							</div>
							<h3 className="text-2xl bg-linear-to-t from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
								{feature.title}
							</h3>
							<p className="mt-2 text-white text-xl">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
