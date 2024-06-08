import type { NextAuthOptions, Session, User } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from 'next-auth/jwt';

interface ExtendedUser extends User {
    id: string;
  }

export const options: NextAuthOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      version: "2.0",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
        }
      },
      authorize: async (credentials, req) => {
        if (credentials) {
          const user = { id: '1', name: 'User', email: 'user@example.com' }; // id should be a string
          if (credentials.username === "user" && credentials.password === "password") {
            return user;
          }
        }
        return null;
      }
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id as string,
        } as ExtendedUser;
      }
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.id = account.providerAccountId;
      }
      return token;
    },
  },
  debug: true,
};