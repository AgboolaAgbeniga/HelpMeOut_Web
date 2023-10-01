import Error from "../assets/error.svg";

const NotFound = () => {
	return (
		<div className="w-full h-screen">
			<div className="text-center w-full h-1/4 text-tprimary py-7 ">
				<h2 className="font-bold text-4xl py-4 leading-20">
					Oops, Wrong Route
				</h2>
			</div>
			<div className="h-3/4 flex flex-col items-center justify-center py-14 gap-6 ">
				<img src={Error} className="w-4/12" alt="reg" />
				<a
					href="/"
					className="bg-dark_blue text-white text-center px-2 py-4 w-6/12 font-semibold rounded-lg"
				>
					Go back Home
				</a>
			</div>
		</div>
	);
};

export default NotFound;
