import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CommunityPartnersPage } from "@/components/CommunityPartnersPage";

export const metadata: Metadata = {
  title: "Community Partners | Microsoft Build Localhost: Bhopal",
  description: "Meet the community partners supporting Microsoft Build Localhost: Bhopal and helping grow the local developer ecosystem.",
};

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <CommunityPartnersPage />
      <Footer />
    </main>
  );
}
