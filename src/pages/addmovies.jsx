import ContactForm from "@/components/ContactForm";
import Headers from "@/components/Headers";

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