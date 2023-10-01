/* eslint-disable react/no-unescaped-entities */
const Transcription = () => {
  return (
		<section className="w-full flex justify-center">
			<main className="w-11/12 flex flex-col gap-10">
				<header className="flex flex-col gap-3 w-fit">
					<h1 className="font-work_sans text-xl font-medium">Transcript</h1>
					<select className="border border-border_lang py-4 px-2 bg-white text-gray-400 text-sm rounded-md focus:ring-border_lang focus:border-border_lang block w-full pl-3 pr-10">
						<option className="text-border_lang">English</option>
					</select>
				</header>

				<section className="pb-7">
					<section className="flex gap-10">
						<p className="font-work_sans text-dark_black text-lg">0.01</p>
						<p className="font-work_sans text-dark_black text-base">
							First step. Open Facebook on your desktop or mobile device and
							locate "Marketplace" in the left-hand menu or at the top of the
							First step. Open Facebook on your desktop or mobile device and
							locate "Marketplace" in the left-hand menu or at the top of the
						</p>
					</section>
				</section>
			</main>
		</section>
	);
}

export default Transcription