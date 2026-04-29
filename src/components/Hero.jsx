import {HERO_CONTENT} from "../constants";

const Hero = () => {
	return (
		<section>
			<div className=" pt-20 md:pt-24 lg:pt-36 bg-[url('../src/assets/hero-image.webp')] h-full w-full bg-cover mx-auto px-4 flex flex-col items-center">
				<div className="px-3 py-2 rounded-full text-2xl lg:text-4xl text-yellow-400">
					{HERO_CONTENT.tagLine}
				</div>
				<h1 className="text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-linear-to-t from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
					{HERO_CONTENT.mainHeading}
				</h1>
				<p className="py-8 mt-6 text-xl lg:text-2xl bg-purple-900/65 rounded-xl text-center uppercase text-yellow-400 max-w-xl">
					{HERO_CONTENT.subHeading}
				</p>

				<div className="py-10 space-x-4">
					<a
						href="#"
						className="inline-block bg-purple-800 hover:bg-purple-500 text-yellow-300 border border-yellow-300 py-3 px-6 rounded-lg font-medium transition duration-200">
						{HERO_CONTENT.callToAction.primary}
					</a>
					<a
						href="#"
						className="inline-block bg-purple-800 hover:bg-purple-500 text-yellow-300 border border-yellow-300 py-3 px-6 rounded-lg font-medium transition duration-200">
						{HERO_CONTENT.callToAction.secondary}
					</a>
				</div>

				<div className="py-8">
					<p className="text-yellow-400 text-center text-xl md:text-2xl">
						{HERO_CONTENT.formatsConverted}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
