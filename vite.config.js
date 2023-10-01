import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// resolve: {
	// 	alias: {
	// 		// Add an alias for firebase/app
	// 		"firebase/app": "firebase/app",
	// 		// Add any other Firebase modules you might need
	// 		"firebase/auth": "firebase/auth",
	// 		// ...
	// 	},
	// },
});
