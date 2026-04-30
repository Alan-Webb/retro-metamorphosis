import service1 from "../assets/services1.webp";
import service2 from "../assets/services2.webp";
import service3 from "../assets/services3.webp";
import service4 from "../assets/services4.webp";
import service5 from "../assets/services5.webp";
import service6 from "../assets/services6.webp";

const Services = () => {
	const services = {
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

	return (
		<section id="services">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
						{services.sectionTitle}
					</h2>
					<p className="mt-4 text-yellow-300 max-w-xl mx-auto text-2xl">
						{services.sectionDescription}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.service.map((service, index) => (
						<div
							key={index}
							className="bg-neutral-900/50 p-6 rounded-xl shadow-lg flex flex-col justify-between text-center">
							<div>
								<h3 className="text-xl text-yellow-400 font-semibold mb-4">
									{service.title}
								</h3>
								<p className="text-white mb-4">{service.description}</p>
							</div>
							<div className="flex justify-center">
								<img
									src={service.imageSrc}
									alt={service.imageAlt}
									className="rounded-lg"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
