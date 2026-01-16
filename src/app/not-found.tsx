import Link from "next/link";

export default function NotFound() {
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
                    fontSize: "clamp(4rem, 15vw, 8rem)",
                    color: "var(--color-primary-gold)",
                    marginBottom: "var(--space-4)",
                    lineHeight: 1,
                }}
            >
                404
            </h1>
            <h2
                style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-h2)",
                    color: "var(--color-text-primary)",
                    marginBottom: "var(--space-4)",
                }}
            >
                Sidan kunde inte hittas
            </h2>
            <p
                style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "var(--text-body)",
                    maxWidth: "400px",
                    marginBottom: "var(--space-8)",
                }}
            >
                Sidan du letar efter verkar inte finnas. Den kan ha flyttats eller tagits bort.
            </p>
            <Link href="/" className="btn btn-primary">
                Tillbaka till startsidan
            </Link>
        </div>
    );
}
