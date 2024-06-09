import type { NextAuthOptions, Session, User } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
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