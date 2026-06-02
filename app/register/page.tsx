import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RegistrationSection } from "@/components/RegistrationSection";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-grow pt-24">
        <RegistrationSection />
      </div>
      <Footer />
    </main>
  );
}
