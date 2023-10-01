import simple_icon from "../../assets/icons/simple_icon.svg"
import easy from "../../assets/icons/easy.svg"
import revisit from "../../assets/icons/revisit.svg"

import videoProfile from "../../assets/landingPage/VideoRepository.svg"


const Features = () => {

    return (
			<section className="w-full h-fit flex justify-center py-16" id="features">
				<main className="w-11/12 h-full justify-center flex flex-col items-center gap-16">
					<span className="flex flex-col gap-2 items-center">
						<h1
							className="font-sora text-4xl font-semibold text-dark_black"
							
						>
							Features
						</h1>
						<p className="font-work_sans text-text text-lg">
							Key Highlights of Our Extension
						</p>
					</span>

					<section className="w-full flex flex-col-reverse  lg:flex-row items-center gap-20 lg:gap-10">
						<section className="flex flex-col gap-16">
							{/* simple recording */}
							<span className="flex gap-5 items-start">
								<img src={simple_icon} />
								<span className="flex flex-col gap-2">
									<h1 className="font-inter text-sub_header text-2xl lg:text-3xl font-medium">
										Simple Screen Recording
									</h1>
									<p className="font-work_sans text-text leading-7 w-full lg:w-3/4 text-lg">
										Effortless screen recording for everyone. Record with ease,
										no tech expertise required.
									</p>
								</span>
							</span>

							{/* easy to share */}
							<span className="flex gap-5 items-start">
								<img src={easy} />
								<span className="flex flex-col gap-2">
									<h1 className="font-inter text-sub_header text-2xl lg:text-3xl font-medium">
										Easy-to-Share URL
									</h1>
									<p className="font-work_sans text-text leading-7 w-full lg:w-3/4 text-lg">
										Share your recordings instantly with a single link. No
										attachments, no downloads.
									</p>
								</span>
							</span>

							<span className="flex gap-4 items-start">
								<img src={revisit} />
								<span className="flex flex-col gap-2">
									<h1 className="font-inter text-sub_header text-2xl lg:text-3xl font-medium">
										Revisit Recordings
									</h1>
									<p className="font-work_sans text-text leading-7 w-full lg:w-3/4  text-lg">
										Access and review your past content effortlessly. Your
										recordings, always at your fingertips.
									</p>
								</span>
							</span>
						</section>
						<img src={videoProfile} className="lg:w-1/2" />
					</section>
				</main>
			</section>
		);
}

export default Features