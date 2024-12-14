import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
export const options = {
  providers: [
    // Uncomment and configure other providers as needed
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_Secret,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_Secret,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        const user = {email:"arul@gmail.com" , password:"password"}
        try {
          const client = await clientPromise;
          const database = client.db("your-database-name");
          const usersCollection = database.collection("users");

          // const foundUser = await usersCollection.findOne({ email: credentials.email });

          if (true) {
            console.log("User Exists");

            if (credentials.password === user.password && credentials.email === user.email) {
              console.log("Good Pass");
              // delete foundUser.password;
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user = token.user;
      return session;
    },
  },
};
