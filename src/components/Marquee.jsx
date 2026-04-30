import {motion} from "framer-motion";

const Marquee = () => {
	const marqueeText =
		"VHS - Betamax - Vinyl - Cassette - 8 Track - Reel-to-Reel - Microcassette - U-matic - 8mm film -";

	return (
		<div className="mt-4 w-full bg-lime-300 text-black lg:py-6">
			<div className="flex overflow-hidden whitespace-nowrap">
				{[...Array(2)].map((_, i) => (
					<motion.h1
						initial={{x: "-100%"}}
						animate={{x: "0"}}
						transition={{repeat: Infinity, duration: 20, ease: "linear"}}
						key={i}
						className="py-2 text-3xl font-bold leading-none tracking-tighter lg:text-7xl">
						{marqueeText}
					</motion.h1>
				))}
			</div>
		</div>
	);
};

export default Marquee;
