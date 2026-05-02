import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "@/lib/mongodb";

export const auth = betterAuth({
  database: mongodbAdapter(
    async () => {
      const client = await clientPromise;
      return client.db();
    },
    {
      client: async () => await clientPromise,
    }
  ),
  trustedOrigins: [
    "http://localhost:3000",
    "https://skill-sphere-amber.vercel.app",
  ],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});