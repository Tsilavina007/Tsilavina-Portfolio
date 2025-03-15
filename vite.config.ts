import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const portd = process.env.PORT || '5173';

// https://vitejs.dev/config/
export default defineConfig(() => ({
	server:
		{
			port: Number(portd),
		},

	plugins: [
		[react()],

	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
}));
