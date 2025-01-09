import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	poweredByHeader: false,
	env: {
		API_URL: process.env.REACT_MOVIES_API_URL,
		API_KEY: process.env.REACT_MOVIES_API_KEY,
	},
}

export default nextConfig
