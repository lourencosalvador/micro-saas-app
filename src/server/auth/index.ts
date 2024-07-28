import NextAuth from 'next-auth'

import { prisma } from '../database'

import { PrismaAdapter } from '@auth/prisma-adapter'

import GitHubProvider from "next-auth/providers/github";

import { Auth } from '@auth/core';


export const {
    handlers: {GET, POST},
    auth
} = NextAuth({
  pages: {
  signIn: '/auth',
  signOut: '/auth',
  error: '/auth',
  verifyRequest: '/auth',
  newUser: '/app' 
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? ''
    })
  ]
})