import videoFrame from "../../assets/icons/video_frame.svg"
import more from "../../assets/icons/more.svg"
import link from "../../assets/icons/link.svg"

const Video = () => {
  return (
		<section className="w-full flex justify-center py-10">
			<main className="w-11/12 flex flex-col gap-10 h-fit">
				<h2 className="font-work_sans text-dark_black text-xl">Recent files</h2>

				<section className="h-full grid grid-cols-1 md:grid-cols-2 gap-10">
					<section className="border border-gray-300 rounded-2xl p-4">
						<span className="relative ">
							<img src={videoFrame} className="bg-cover w-full" />
							<p className="rounded-md font-work_sans text-dark_blue absolute bottom-2 right-2 px-5 py-2 bg-time_label bg-cover">
								00:34
							</p>
						</span>

						<span className="flex justify-between items-start pt-4">
							<span className="flex flex-col gap-3">
								<h1 className="text-dark_black font-work_sans font-medium text-lg md:text-xl ">How to create Facebook Ad listing</h1>
								<p className="font-work_sans text-border">SEPTEMBER 23, 2023</p>
							</span>

                            <span className="flex gap-3">
                                <img src={link} />
                                <img src={more} />
                            </span>
						</span>
					</section>
				</section>
			</main>
		</section>
	);
}

export default Video