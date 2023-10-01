import facebook from "../../assets/icons/SignUp/Facebook.svg"
import google from "../../assets/icons/SignUp/Google.svg"
import or from "../../assets/icons/or.svg"

import SignUp from "./SignUp.jsx";
// import {
// 	firebaseAuthorization,
// 	googleProvider,
// } from "../../config/firebase.js";

const Login = () => {
	// const signInWithGoogle = async (e) => {
	// 	try {
	// 		const { target: { name },} = e;
	// 		let provider;
	// 		if (name === "google") {
	// 			provider = new googleProvider();
	// 		}
	// 		await firebaseAuthorization(provider);
	// 	}
	// 	catch (err) {
	// 		console.log(err)
	// 	}
	// };
	return (
		<section className="h-full flex justify-center">
			<form className="w-full md:w-1/2 flex flex-col gap-10">
				{/* signup and login header */}
				<header className="flex flex-col gap-5 items-center">
					<h1 className="font-inter text-3xl md:text-4xl font-semibold text-dark_black">
						Log in or Sign up
					</h1>
					<p className="text-login_text font-inter font-thin text-center text-sm md:text-base">
						Join millions of others in sharing successful <br />
						moves on <b>HelpMeOut</b>.
					</p>
				</header>

				{/* login google button */}
				<button
					className="border border-dark_black w-full py-3 rounded-lg font-inter font-medium flex gap-4 justify-center"
					name="google"
				>
					<img src={google} />
					Continue with Google
				</button>

				{/* login facebook button */}
				<button className="border border-dark_black w-full py-3 rounded-lg font-inter font-medium flex gap-4 justify-center">
					<img src={facebook} />
					Continue with Facebook
				</button>

				<img src={or} />

				<SignUp />
			</form>
		</section>
	);
}

export default Login