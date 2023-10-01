import headerImg from "../../assets/landingPage/headerImg.jpg"
import arrowIcon from "../../assets/icons/arrow-right.svg"

const Header = () => {
    return (
			<section className="h-fit w-full flex justify-center pt-16 pb-10">
				<main className="w-11/12 h-full flex flex-col lg:flex-row gap-10 lg:gap-5 items-center">
					<section className="flex flex-col gap-6 items-center lg:items-start">
						<h1 className="text-3xl sm:text-5xl text-center lg:text-start lg:text-6xl font-sora font-bold text-dark_black">
							Show Them Don’t Just Tell
						</h1>
						<p className="font-inter text-black opacity-70 text-xl leading-8 text-center lg:text-start">
							Help your friends and loved ones by creating and sending videos on
							how to get things done on a website.
						</p>
						<a
							href="/"
							className="bg-dark_blue text-white w-fit flex gap-3 px-5 py-4 rounded-md"
						>
							Install HelpMeOut
							<img src={arrowIcon} className="w-4" />
						</a>
					</section>
					<img src={headerImg} />
				</main>
			</section>
		);
}

export default Header