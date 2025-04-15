import { checkUserPermission } from "@/lib/fga-utils";
import { redirect } from "next/navigation";

export async function Protected({
  children,
  object,
  relation,
  fallback,
}: {
  children: React.ReactNode;
  object: string;
  relation: string;
  fallback?: React.ReactNode;
}) {
  try {
    const result = await checkUserPermission(object, relation);
    if (!result.allowed) {
      if (fallback) return <>{fallback}</>;
      redirect("/unauthorized");
    }
    return <>{children}</>;
  } catch (error) {
    console.error("FGA check error:", error);
    if (fallback) return <>{fallback}</>;
    return <div>You must be an admin to view admin settings!</div>;
  }
}