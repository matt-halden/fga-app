import { getSession } from "@auth0/nextjs-auth0";
import { fgaClient } from "./fga";
import { redirect } from "next/navigation";

export async function checkUserPermission(
  object: string,
  relation: string,
  redirectTo: string = "/api/auth/login"
) {
  // Get Auth0 session
  const session = await getSession();
  if (!session?.user) {
    redirect(redirectTo);
  }

  const userId = session.user.sub;

  try {
    // Check if user has the required permission using FGA
    const { allowed } = await fgaClient.check({
      user: `user:${userId}`,
      relation,
      object,
    });

    if (!allowed) {
      redirect("/unauthorized");
    }

    // Return user and permission status
    return {
      user: session.user,
      allowed: true,
    };
  } catch (error) {
    console.error("FGA check error:", error);
    redirect("/error");
  }
}