const Pricing = () => {
	const pricingContent = {
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

	return (
		<section id="pricing">
			<div className="max-w-7xl mx-auto px-6 mt-20">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
						{pricingContent.sectionTitle}
					</h2>
					<p className="mt-4 text-xl pb-10">
						{pricingContent.sectionDescription}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
					{pricingContent.plans.map((plan, index) => (
						<div
							key={index}
							className={`
							p-8 rounded-xl bg-neutral-900/50 shadow-lg ${
								plan.popular
									? "border border-yellow-500/80"
									: "border border-neutral-800 pt-18"
							}
							`}>
							{plan.popular && (
								<div className="text-center mb-4">
									<span className="bg-purple-600 text-white text-xs py-1 px-3 rounded-full uppercase">
										{pricingContent.popularBadge}
									</span>
								</div>
							)}
							<h3 className="text-lg lg:text-xl mb-4 tracking-tighter uppercase bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
								{plan.name}
							</h3>
							<p className="text-white mb-6">{plan.description}</p>
							<div className="text-2xl lg:text-3xl bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-medium mb-6">
								{plan.price}
							</div>
							<ul className="mb-8 space-y-2 text-white">
								{plan.features.map((feature, i) => (
									<li key={i} className="flex items-center">
										<span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
										{feature}
									</li>
								))}
							</ul>
							<button className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 text-yellow-300 rounded-lg cursor-pointer">
								{pricingContent.ctaText}
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
