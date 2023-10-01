import videoFrame from "../../../assets/icons/videoframe1.svg";

import whatsapp from "../../../assets/icons/whatsapp.svg";
import facebook from "../../../assets/icons/fb.svg"
import telegram from "../../../assets/icons/telegram.svg"
import copy from "../../../assets/icons/copy.svg"

const ListDetails = () => {
  return (
		<section className="py-10 flex justify-center">
			<main className="w-11/12 flex flex-col gap-12">
				<section className="w-full h-full border border-gray-300 rounded-2xl p-4 relative">
					<img src={videoFrame} className="bg-cover w-full" />
					<p className="rounded-md font-work_sans text-dark_blue absolute bottom-7 right-7 px-5 py-2 bg-time_label bg-cover">
						00:34
					</p>
				</section>

				<section className="flex flex-col gap-10">
					{/* submit and copy url */}
					<section className="flex flex-col md:flex-row gap-5 md:gap-10 ">
						<span className="bg-send_border opacity-50 flex justify-between w-full md:w-1/2 border border-time_label rounded-lg px-3 py-2 items-center cursor-pointer">
							<input
								type="search"
								placeholder="enter email of receiver"
								className="bg-transparent placeholder:text-dark_black font-work_sans text-sm w-full px-1 py-3"
							/>
							<input
								type="submit"
								value="Send"
								className="bg-send font-sora text-white text-sm py-1 px-4 rounded-md h-3/4 cursor-pointer"
							/>
						</span>

						<span className="bg-url flex justify-between w-full md:w-1/2 border border-zinc-200 rounded-lg px-3 py-2 items-center cursor-pointer">
							<input
								type="search"
								placeholder="https://www.helpmeout/Untitled_Video_20232509"
								className="bg-transparent placeholder:text-url_text font-work_sans text-sm w-4/5 px-1 py-3 font-thin"
							/>
							<span className="border border-dark_blue flex gap-3 font-sora text-dark_black text-sm rounded-md cursor-pointer p-2">
								<img src={copy} className=" w-5" />
								<input type="submit" value="Copy URL" className="text-sm" />
							</span>
						</span>
					</section>

					{/* social media buttons */}
					<section className="flex flex-col gap-3">
						<h1 className="font-work_sans text-dark_blue">Share your video</h1>

						{/* SOCIAL MEDIA LINK */}
						<section className="w-fit flex flex-col md:flex-row gap-5">
							{/* facebook */}
							<span className="flex gap-3 border border-dark_black px-5 py-2 rounded-md cursor-pointer">
								<img src={facebook} />
								<p>Facebook</p>
							</span>

							{/* whatsapp */}
							<span className="flex gap-3 border border-dark_black px-5 py-2 rounded-md cursor-pointer">
								<img src={whatsapp} />
								<p>WhatsApp</p>
							</span>

							{/* telegram */}
							<span className="flex gap-3 border border-dark_black px-5 py-2 rounded-md cursor-pointer">
								<img src={telegram} />
								<p>Telegram</p>
							</span>
						</section>
					</section>
				</section>
			</main>
		</section>
	);
}

export default ListDetails