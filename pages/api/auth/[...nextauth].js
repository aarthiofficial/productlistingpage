import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials.username === "user" && credentials.password === "pass") {
          return { id: 1, name: "Test User" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/signin'
  }
});
