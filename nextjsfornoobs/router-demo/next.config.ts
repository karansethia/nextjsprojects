import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/frontendkaran/**", // Replace with your Cloudinary cloud name
      },
    ],
  },
};

export default nextConfig;
