import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],

	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@globalStyles': path.resolve(__dirname, 'src/styles/globalStyles.css'),
			'@globalStylesJSX': path.resolve(__dirname, 'src/styles/styles.jsx'),
			'@pages': path.resolve(__dirname, 'src/components/pages'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@mocks': path.resolve(__dirname, 'src/mocks'),
			'@contexts': path.resolve(__dirname, 'src/contexts'),
			'@services': path.resolve(__dirname, 'src/services'),
		},
	},
})
