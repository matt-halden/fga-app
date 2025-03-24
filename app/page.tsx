import Image from "next/image";
import ActionSearchBar from "@/app/ui/kokonutui/action-search-bar";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ActionSearchBar />
    </div>
  );
}
