import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { findUser } from "./app/api/auth/findUser";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        let user = null;
        // logic to verify if the user exists
        user = await findUser(credentials);
        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }
        // return user object with their profile data
        return user;
      },
    }),
  ],
});
