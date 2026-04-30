const Hero = () => {
	return (
		<section>
			<div className=" pt-20 md:pt-24 lg:pt-36 bg-[url('../src/assets/hero-image.webp')] h-full w-full bg-cover mx-auto px-4 flex flex-col items-center">
				<div className="px-3 py-2 rounded-full text-2xl lg:text-4xl text-yellow-400">
					From old school to modern
				</div>
				<h1 className="text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-linear-to-t from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
					Retro Metamorphosis
				</h1>
				<p className="py-8 mt-6 text-xl lg:text-2xl bg-purple-900/65 rounded-xl text-center uppercase text-yellow-400 max-w-xl">
					Transform your treasured analogue recordings into easily accessible
					digital files. Preserving your memories and making them simple to
					share and enjoy
				</p>

				<div className="py-10 space-x-4">
					<a
						href="#"
						className="inline-block bg-purple-800 hover:bg-purple-500 text-yellow-300 border border-yellow-300 py-3 px-6 rounded-lg font-medium transition duration-200">
						Our Services
					</a>
					<a
						href="#"
						className="inline-block bg-purple-800 hover:bg-purple-500 text-yellow-300 border border-yellow-300 py-3 px-6 rounded-lg font-medium transition duration-200">
						Get A Quote
					</a>
				</div>

				<div className="py-8">
					<p className="text-yellow-400 text-center text-xl md:text-2xl">
						Transcription Services
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
