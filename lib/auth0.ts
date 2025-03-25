// import { Auth0Client } from "@auth0/nextjs-auth0"

// export const auth0 = new Auth0Client({
//   // These values can also come from environment variables
//   clientID: process.env.AUTH0_CLIENT_ID,
//   clientSecret: process.env.AUTH0_CLIENT_SECRET,
//   domain: process.env.AUTH0_DOMAIN,
//   baseURL: process.env.AUTH0_BASE_URL,
  
//   // Custom settings
//   routes: {
//     callback: '/api/auth/callback',
//     login: '/api/auth/login',
//     logout: '/api/auth/logout',
//   },
//   session: {
//     rollingDuration: 60 * 60 * 24, // 24 hours in seconds
//   },
//   authorizationParams: {
//     scope: 'openid profile email',
//   },
// })