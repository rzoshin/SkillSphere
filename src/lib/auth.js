import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "./mongodb";

const client = await clientPromise;   // ✅ resolves once, safe
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),

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