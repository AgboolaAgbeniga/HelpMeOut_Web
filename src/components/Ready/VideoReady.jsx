import edit from "../../assets/icons/edit.svg"
import whatsapp from "../../assets/icons/whatsapp.svg";
import facebook from "../../assets/icons/fb.svg";
import telegram from "../../assets/icons/telegram.svg";
import copy from "../../assets/icons/copy.svg";

import Transcription from "../Homepage/SubHome/Transcription"
import Video from "./Video.jsx"

const VideoReady = () => {
  return (
		<section className="w-full flex justify-center h-fit">
			<main className="w-11/12 h-fit flex flex-col md:flex-row gap-10">
				{/* video information */}
				<section className="w-full md:w-1/2 flex flex-col gap-10">
					<h1 className="font-sora font-bold text-4xl text-dark_black">
						Your video is ready!
					</h1>

					<span className="flex flex-col gap-2">
						<label className="text-gray font-sora text-base">Name</label>
						<span className="flex gap-5">
							<p className="text-modal_text font-sora text-xl font-semibold">
								Untitled_Video_20232509
							</p>
							<img src={edit} />
						</span>
					</span>

					{/* submit and copy url */}
					<section className="flex flex-col gap-16">
						<span className="bg-send_border flex justify-between w-full border border-time_label rounded-lg px-3 py-2 items-center cursor-pointer">
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

						<section className="flex flex-col gap-2">
							<label>Video Url</label>

							<span className="bg-url flex justify-between w-full border border-zinc-200 rounded-lg px-3 py-2 items-center cursor-pointer">
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
					</section>

					{/* social media buttons */}
					<section className="flex flex-col gap-3">
						<h1 className="font-work_sans text-dark_blue font-semibold">
							Share your video
						</h1>

						{/* SOCIAL MEDIA LINK */}
						<section className="w-fit flex flex-col lg:flex-row gap-5">
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

				{/* video and transcription */}
				<section className="border border-t-0 border-r-0 border-b-0  border-zinc-400 w-full md:w-1/2 flex flex-col gap-16">
          <Video />
					<Transcription />
				</section>
			</main>
		</section>
	);
}

export default VideoReady