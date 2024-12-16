// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import clientPromise from "@/lib/mongodb";

// export const options = {
//   providers: [
//     // Uncomment and configure other providers as needed
//     // GitHubProvider({
//     //   clientId: process.env.GITHUB_ID,
//     //   clientSecret: process.env.GITHUB_Secret,
//     // }),
//     // GoogleProvider({
//     //   clientId: process.env.GOOGLE_ID,
//     //   clientSecret: process.env.GOOGLE_Secret,
//     // }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "email:",
//           type: "text",
//           placeholder: "your-email",
//         },
//         password: {
//           label: "password:",
//           type: "password",
//           placeholder: "your-password",
//         },
        
//       },
//       async authorize(credentials) {
//         const user = {email:"arul@gmail.com" , password:"password"}
//         try {
//           const client = await clientPromise;
//           const database = client.db("wasteuserdtabase");
//           const usersCollection = database.collection("users");
        
//           // Find the user by email
//           const foundUser = await usersCollection.findOne({ email: credentials.email });
        
//           if (foundUser) {
//             console.log("User Exists");
        
//             // Check if the credentials match
//             if (credentials.password === foundUser.password) {
//               console.log("Authentication successful");
//               return foundUser; // Return the authenticated user
//             } else {
//               console.log("Invalid password");
//               return null; // Authentication failed
//             }
//           } else {
//             console.log("User not found");
//             return null; // User does not exist
//           }
//         } catch (error) {
//           console.error("Error during authentication:", error);
//           throw new Error("Authentication failed");
//         }
        
//         return null;
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) token.user = user;
//       return token;
//     },
//     async session({ session, token }) {
//       if (session?.user) session.user = token.user;
//       return session;
//     },
//   },
// };



import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb"; // Assuming this is your MongoDB connection logic

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
          label: "Email",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        const user = { email: "arul@gmail.com", password: "password" }; // Temporary mock user for testing
        try {
          const client = await clientPromise;
          const database = client.db("wasteuserdtabase"); // Use your DB name
          const usersCollection = database.collection("users");

          // Find the user by email
          const foundUser = await usersCollection.findOne({ email: credentials.email });

          if (foundUser) {
            console.log("User exists");

            // Check if the credentials match
            if (credentials.password === foundUser.password) {
              console.log("Authentication successful");
              return foundUser; // Return the authenticated user
            } else {
              console.log("Invalid password");
              return null; // Authentication failed
            }
          } else {
            console.log("User not found");
            return null; // User does not exist
          }
        } catch (error) {
          console.error("Error during authentication:", error);
          throw new Error("Authentication failed");
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Add custom user data to the token
        token.email = user.email; // Example: Adding email to the token
        // Add any other custom data you want to pass
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        // Attach the custom data from token to the session
        session.user.email = token.email; // Attach email from token to session
        session.user.name = token.name;   // Attach name from token to session
        // You can add more custom data here if needed
      }
      return session;
    },
  },
  session: {
    jwt: true, // Use JWT for session management
  },
  // pages: {
  //   signIn: "/auth/signin", // Optional: You can customize the sign-in page path
  // },
};
