import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  pages: {
    signIn: "/auth/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "The Bengal Beat",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials) return null;

        const { username, password } = credentials;
        if (username !== "NFuller721" || password !== "Satchel721") return null;
  
        return {
          id: "1234",
          name: "NFuller721"
        }
      }
    })
  ]
})