import AddressForm from "@/components/layout/contactlayout/addressform";
import ContactForm from "@/components/layout/contactlayout/contactform";
import ContactSection from "@/components/layout/contactlayout/contactsection";

export default function Contact() {
    return(
        <>
            <ContactSection />
            <ContactForm />
            <AddressForm />
        </>
    );
}
