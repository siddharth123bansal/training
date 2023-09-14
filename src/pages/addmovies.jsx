import { Inter } from "next/font/google";
import ContactForm from "@/components/ContactForm";
import Headers from "@/components/Headers";
const inter = Inter({ subsets: ["latin"] });

export default function AddMovie() {
    return (
        <>
        <Headers/>
        <div className="container mt-10">
          <ContactForm />
        </div>
        </>
      );
}
