import logo from "../../assets/logo.svg";
import setting from "../../assets/icons/setting.svg";
import close_pop from "../../assets/icons/close-circle.svg"
import tab from "../../assets/icons/tab_pop.svg"
import camera from "../../assets/icons/video-camera.svg"
import audio from "../../assets/icons/audio.svg"

const popup = () => {
	return (
		<section className="w-full h-full flex justify-center">
			<section className="w-1/4 h-fit shadow-xl rounded-3xl p-7 flex flex-col justify-center gap-7">
				<header className="flex justify-between ">
					<span className="flex gap-3 items-center font-inter">
						<a href="/" className="flex gap-3 items-center ">
							<img src={logo} />
							<p className="text-dark_blue font-semibold text-base">
								HelpMeOut
							</p>
						</a>
					</span>
					<span className="flex gap-6">
						<img src={setting} />
						<img src={close_pop} />
					</span>
				</header>

				<p className="font-work_sans text-modal_text">
					This extension helps you record and share help videos with ease.
				</p>

				<img src={tab} />

				{/* camera button */}
				<button className="flex justify-between border border-dark_blue p-4 rounded-2xl">
					<span className="flex gap-3">
						<img src={camera} />
						<p className="font-work_sans text-lg">Camera</p>
					</span>
					<label className="relative inline-flex items-center cursor-pointer">
						<input type="checkbox" value="" className="sr-only peer" />
						<div className="w-11 h-6 bg-gray-300 border border-dark_blue peer-focus:outline-none rounded-full peer:border-gray-100 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-dark_blue"></div>
					</label>
				</button>

                {/* audio button */}
				<button className="flex justify-between border border-dark_blue p-4 rounded-2xl">
					<span className="flex gap-3">
						<img src={audio} />
						<p className="font-work_sans text-lg">Audio</p>
					</span>
					<label className="relative inline-flex items-center cursor-pointer">
						<input type="checkbox" value="" className="sr-only peer" />
						<div className="w-11 h-6 bg-gray-300 border border-dark_blue peer-focus:outline-none rounded-full peer:border-gray-100 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-dark_blue"></div>
					</label>
				</button>

                {/* start recording */}
                
                <button className="bg-dark_blue text-white font-work_sans text-lg py-4 rounded-2xl">Start Recording</button>
			</section>
		</section>
	);
};

export default popup;
