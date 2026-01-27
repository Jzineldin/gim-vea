"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setStatusMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setStatusMessage(data.message);
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
                setStatusMessage(data.error || "Ett fel uppstod");
            }
        } catch {
            setStatus("error");
            setStatusMessage("Kunde inte skicka meddelandet. Vänligen försök igen.");
        }
    };

    return (
        <div className={styles.main}>
            <div className={`${styles.container} animate-fade-up`}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Låt oss prata</h1>
                    <p className={styles.subtitle}>
                        Boka ett utforskande samtal eller skicka ett meddelande nedan.
                    </p>
                </div>

                <div className={`${styles.bookingSection} animate-fade-up delay-100`}>
                    <div className={styles.bookingCard}>
                        <h2 className={styles.bookingTitle}>Boka ett kostnadsfritt samtal</h2>
                        <p className={styles.bookingText}>
                            Välkommen att boka ett 30-minuters samtal där vi utforskar hur jag kan stötta dig i ditt ledarskap.
                        </p>
                        <Link
                            href="https://calendly.com/monika-gim-vea/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Boka tid nu
                        </Link>
                    </div>
                </div>

                <div className={styles.divider}>
                    <span className={styles.dividerText}>eller skicka ett meddelande</span>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={`${styles.inputGroup} animate-fade-up delay-100`}>
                        <label htmlFor="name" className={styles.label}>Namn</label>
                        <input
                            type="text"
                            id="name"
                            className={styles.input}
                            placeholder="Ditt namn"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={`${styles.inputGroup} animate-fade-up delay-200`}>
                        <label htmlFor="email" className={styles.label}>E-post</label>
                        <input
                            type="email"
                            id="email"
                            className={styles.input}
                            placeholder="din@email.se"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={`${styles.inputGroup} animate-fade-up delay-300`}>
                        <label htmlFor="message" className={styles.label}>Meddelande</label>
                        <textarea
                            id="message"
                            className={styles.textarea}
                            placeholder="Berätta kort om dina behov..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {status !== "idle" && (
                        <div
                            className={`${styles.statusMessage} ${
                                status === "success" ? styles.statusSuccess :
                                status === "error" ? styles.statusError :
                                styles.statusLoading
                            }`}
                        >
                            {status === "loading" ? "Skickar..." : statusMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        className={`btn btn-primary animate-fade-up delay-300 ${styles.submitButton}`}
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Skickar..." : "Skicka Förfrågan"}
                    </button>
                </form>

                <div className={`${styles.socials} animate-fade-up delay-300`}>
                    <Link href="https://www.linkedin.com/in/monika-bj%C3%B6rklund-12841041/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</Link>
                    <Link href="https://www.instagram.com/gimvea/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</Link>
                    <a href="mailto:monika@gim-vea.com" className={styles.socialLink}>monika@gim-vea.com</a>
                </div>
            </div>
        </div>
    );
}
