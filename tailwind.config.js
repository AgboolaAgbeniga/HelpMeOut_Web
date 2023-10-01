/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				sora: ["Sora", "sans-serif"],
				work_sans: ["Work Sans", "sans-serif"],
			},
			colors: {
				dark_blue: "#120B48",
				dark_black: "#141414",
				line: "#F4F6F8",
				text: "#616163",
				sub_header: "#1B233D",
				login_text: "#434343",
				border: "#B6B3C6",
				modal_text: "#413C6D",
				line_home: "#DFE1E5",
				search_bg: "#F4F4F7",
				placeholder: "#C3C3C3",
				time_label: "#E7E7ED",
				send: "#605C84",
				send_border: "#F1F0F4",
				url: "#FAFAFA",
				url_text: "#4B4B4B",
				border_lang: "#CFCFCF",
				account: "#FAFAFB",
				account_gray: "#7E7E7E",
				gray: "#727272",
			},
		},
	},
	plugins: [],
};

