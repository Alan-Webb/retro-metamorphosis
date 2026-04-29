import {FEATURES_CONTENT} from "../constants";

const Features = () => {
	return (
		<section id="features">
			<div className="max-w-7xl mx-auto px-4 mt-20">
				<div className="text-center mb-8">
					<h2 className="text-3xl lg:text-5xl mt-20 py-8 tracking-tighter bg-linear-to-t from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
						{FEATURES_CONTENT.sectionTitle}
					</h2>
					<p className="mt-4 text-xl">{FEATURES_CONTENT.sectionDescription}</p>
				</div>

				<div className="flex flex-wrap justify-between">
					{FEATURES_CONTENT.features.map((feature) => (
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
