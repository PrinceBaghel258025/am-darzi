import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import authServices from "../../../src/services/auth";


const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Sign In To Access",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      // credentials: {
      //   email: { label: "Username", type: "text", placeholder: "jsmith" },
      //   password: { label: "Password", type: "password" }
      // },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const data = await authServices.signIn(credentials);
        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        // console.log(data)
        return data
        const user = data;
        // if (!!data) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   // console.log("inside nextauth", data)
        //   return data
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null

        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
      }
    }),
  ],
  // pages: {
  //   signIn: '/auth/signIn'
  // },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async signin ({user, account, profile, email, credentials}){

      // console.log("inside signin callback", user)
      // console.log("inside signin callback", profile)
      return true;
    },
    async session({ session, user, token }) {
      // console.log("inside session token", token)
      // session.user = token;
      session.token = token.accessToken;
      // console.log("inside session", session)
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log("inside jwt", token)
      // console.log("inside jwt", user)
      if(user) {

        token.name = user.name;
        token.accessToken = user.accessToken;
      }
      return token
    }
  },
  // cookies: {
  //   sessionToken: {
  //     name: `next-auth.session-token`, // Make sure to add conditional logic so that the name of the cookie does not include `__Secure-` on localhost
  //     options: { // All of these options must be specified, even if you're not changing them
  //       httpOnly: true,
  //       sameSite: 'lax',
  //       path: '/',
  //       secure: true,
  //       domain: `localhost` // Ideally, you should use an environment variable for this
  //     }
  //   },
  // }
}

export default NextAuth(authOptions);