import Header from "@/components/Headers";
import { Inter } from "next/font/google";
import ContactForm from "@/components/ContactForm";
import Headers from "@/components/Headers";
const inter = Inter({ subsets: ["latin"] });

export default function AddMovie() {
    return (
        <>
        <Headers/>
        <div className="container mx-auto mt-8">
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <ContactForm />
        </div>
        </>
      );
}
