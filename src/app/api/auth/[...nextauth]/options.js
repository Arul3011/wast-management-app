import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your-email" },
        password: { label: "Password", type: "password", placeholder: "your-password" },
      },
      async authorize(credentials) {
        try {
          const client = await clientPromise;
          const database = client.db("wasteuserdtabase");
          const usersCollection = database.collection("users");

          // Find user by email
          const foundUser = await usersCollection.findOne({ email: credentials.email });

          if (foundUser) {
            console.log("User exists");

            // Check if the password matches (no hashing)
            if (credentials.password === foundUser.password) {
              console.log("Authentication successful");
              return { email: foundUser.email }; // Return only email
            } else {
              console.log("Invalid password");
              return null;
            }
          } else {
            console.log("User not found");
            return null;
          }
        } catch (error) {
          console.error("Error during authentication:", error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email; // Add email to the JWT token
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.email = token.email; // Add email to the session
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin", 
  },
}


