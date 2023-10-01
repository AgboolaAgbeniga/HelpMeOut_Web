const SignUp = () => {
  return (
		<section className="flex flex-col gap-8">

            {/* email input */}
			<span className="flex flex-col gap-4">
				<label className="font-work_sans text-dark_black">Email</label>
				<input
					type="email"
					placeholder="Enter your email address"
					className="py-3 px-5 border border-border rounded-lg placeholder:text-text placeholder:font-work_sans "
				/>
			</span>

            {/* password input */}
			<span className="flex flex-col gap-4">
				<label className="font-work_sans text-dark_black">Password</label>
				<input
					type="password"
					placeholder="Enter your Password"
					className="py-3 px-5 border border-border rounded-lg placeholder:text-text placeholder:font-work_sans "
				/>
			</span>

            <button className="bg-dark_blue text-white py-4 rounded-lg font-work_sans font-light text-xl">Sign Up</button>
		</section>
	);
}

export default SignUp