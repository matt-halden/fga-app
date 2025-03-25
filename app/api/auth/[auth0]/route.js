// app/api/auth/[auth0]/route.js
import { handleAuth } from '@auth0/nextjs-auth0';
// import { auth0 } from '@/lib/auth0';

// export const GET = handleAuth({
//   login: async (req) => {
//     return await auth0.handleLogin(req, {
//       returnTo: '/dashboard',
//       // Other login options
//     });
//   },
//   // Other custom handlers if needed
// });

export const GET = handleAuth();