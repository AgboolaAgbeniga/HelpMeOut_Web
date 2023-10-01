import one from "../../assets/icons/one.svg"
import two from "../../assets/icons/two.svg"
import three from "../../assets/icons/three.svg"

import works_img from "../../assets/icons/how_it_works_img.svg"

const Works = () => {
	return (
		<section
			className="h-fit flex items-center justify-center py-24"
			id="works"
		>
			<main className="w-11/12 h-full flex flex-col items-center gap-16">
				<h1
					className="font-semibold text-dark_black font-sora text-4xl"
					
				>
					How it works
				</h1>

				<section className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
					{/* record screen */}
					<section className="w-full h-full flex flex-col justify-center items-center gap-7">
						<img src={one} className="w-12" />
						<span className="flex flex-col gap-3 items-center">
							<h1 className="font-inter text-2xl lg:text-3xl font-semibold text-sub_header">
								Record Screen
							</h1>
							<p className="font-work_sans text-lg text-text font-light text-center">
								Click the "Start Recording" button in our extension. choose
								which part of your screen to capture and who you want to send it
								to.
							</p>
						</span>
						<img src={works_img} />
					</section>

					{/* share your recording */}
					<section className="w-full h-full flex flex-col justify-center items-center gap-7">
						<img src={two} className="w-12" />
						<span className="flex flex-col gap-3 items-center">
							<h1 className="font-inter text-2xl lg:text-3xl font-semibold text-sub_header">
								Share Your Recording
							</h1>
							<p className="font-work_sans text-lg text-text font-light text-center">
								We generate a shareable link for your video. Simply send it to
								your audience via email or copy the link to send via any
								platform.
							</p>
						</span>
						<img src={works_img} />
					</section>

					<section className="w-full h-full flex flex-col justify-center items-center gap-7">
						<img src={three} className="w-12" />
						<span className="flex flex-col gap-3 items-center">
							<h1 className="font-inter text-2xl lg:text-3xl font-semibold text-sub_header">
								Learn Effortlessly
							</h1>
							<p className="font-work_sans text-lg text-text font-light text-center">
								Recipients can access your video effortlessly through the
								provided link, with our user-friendly interface suitable for
								everyone.
							</p>
						</span>
						<img src={works_img} />
					</section>
				</section>
			</main>
		</section>
	);
}

export default Works