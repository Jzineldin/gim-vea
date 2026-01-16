"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <div
            style={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "var(--space-8)",
            }}
        >
            <h1
                style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-h1)",
                    color: "var(--color-primary-gold)",
                    marginBottom: "var(--space-4)",
                }}
            >
                Något gick fel
            </h1>
            <p
                style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "var(--text-body)",
                    maxWidth: "400px",
                    marginBottom: "var(--space-8)",
                }}
            >
                Ett oväntat fel uppstod. Vänligen försök igen eller gå tillbaka till startsidan.
            </p>
            <div style={{ display: "flex", gap: "var(--space-4)" }}>
                <button
                    onClick={() => reset()}
                    className="btn btn-primary"
                    style={{ cursor: "pointer" }}
                >
                    Försök igen
                </button>
                <a href="/" className="btn btn-glass">
                    Startsidan
                </a>
            </div>
        </div>
    );
}
