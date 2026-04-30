import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

const Testimonials = () => {
	const testimonialsContent = {
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

	return (
		<section id="testimonials">
			<div className="max-w-7xl mx-auto px-4 mt-20">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
						{testimonialsContent.sectionTitle}
					</h2>
					<p className="mt-4">{testimonialsContent.sectionDescription}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonialsContent.reviews.map((review, index) => (
						<div
							key={index}
							className="mt-10 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-neutral-900/50 border border-yellow-400 p-10">
							<p className="mb-4 text-neutral-200">{review.review}</p>
							<div className="flex items-center mt-4">
								<img
									src={review.image}
									alt={review.alt}
									className="w-12 h-12 rounded-full mr-4"
								/>
								<div>
									<p className="text-sm font-bold text-white">{review.name}</p>
									<p className="text-sm text-gray-500">{review.location}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
