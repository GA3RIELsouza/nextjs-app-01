import { db } from "@/lib/firebase/firebaseconfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function submitContactForm(data: any): Promise<boolean> {
    try {
        const docRef = await addDoc(collection(db, "contacts"), {
            ...data,
            createdAt: serverTimestamp()
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
        return false;
    }

    return true;
}
