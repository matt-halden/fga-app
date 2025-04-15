import { CredentialsMethod, OpenFgaClient } from "@openfga/sdk";

if (!process.env.FGA_API_URL || !process.env.FGA_STORE_ID || !process.env.FGA_MODEL_ID || !process.env.FGA_CLIENT_ID || !process.env.FGA_CLIENT_SECRET || !process.env.FGA_API_TOKEN_ISSUER || !process.env.FGA_API_AUDIENCE) {
  throw new Error("Missing required FGA environment variables");
}

export const fgaClient = new OpenFgaClient({
  apiUrl: process.env.FGA_API_URL,
  storeId: process.env.FGA_STORE_ID,
  authorizationModelId: process.env.FGA_MODEL_ID,
  credentials: {
    method: CredentialsMethod.ClientCredentials,
    config: {
      clientId: process.env.FGA_CLIENT_ID,
      clientSecret: process.env.FGA_CLIENT_SECRET,
      apiTokenIssuer: process.env.FGA_API_TOKEN_ISSUER,
      apiAudience: process.env.FGA_API_AUDIENCE,
    },
  },
});