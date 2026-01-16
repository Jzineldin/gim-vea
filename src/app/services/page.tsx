import Link from "next/link";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tjänster | GIM-VEA",
    description: "Operations Partner-tjänster för medvetna ledare och coacher. Klarhet & struktur, flow & arbetsrytmer, partnerskap och flexibel premiumsupport.",
    openGraph: {
        title: "Tjänster | GIM-VEA",
        description: "Operations Partner-tjänster för medvetna ledare och coacher.",
    },
};

export default function Services() {
    return (
        <div className={styles.main}>
            <div className={`${styles.header} animate-fade-up`}>
                <h1 className={`${styles.title} display-text`}>Mina Tjänster</h1>
                <p className={styles.subtitle}>
                    Skräddarsydda lösningar för struktur, flow och expansion.
                </p>
            </div>

            <div className={styles.bentoGrid}>
                {/* Card 1: Klarhet & Struktur */}
                <div className={`${styles.card} ${styles.cardPrimary} ${styles.cardKlarhet} animate-fade-up delay-100`}>
                    <div className={styles.cardBg}></div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardIcon}>❖</div>
                        <h2 className={styles.cardTitle}>Klarhet & Struktur</h2>
                        <p className={styles.cardDesc}>
                            Jag skapar struktur i ditt digitala landskap och i dina dagliga system,
                            så allt blir lätt att navigera och enkelt att underhålla.
                        </p>
                        <ul className={styles.cardList}>
                            <li>Mejlhantering & kalender</li>
                            <li>Digital mappstruktur & molntjänster</li>
                            <li>Verktyg & systemorganisering</li>
                            <li>Struktur för sociala medier och administration</li>
                            <li>Prioriteringskartor och tydliga rutiner</li>
                        </ul>
                        <p className={styles.cardResult}>
                            <strong>Resultat:</strong> En business som känns lättare, renare och mer sammanhållen.
                            Du vet vad som gäller — och var allt finns.
                        </p>
                    </div>
                </div>

                {/* Card 2: Flow & Arbetsrytmer */}
                <div className={`${styles.card} ${styles.cardSecondary} ${styles.cardFlow} animate-fade-up delay-200`}>
                    <div className={styles.cardBg}></div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardIcon}>∞</div>
                        <h2 className={styles.cardTitle}>Flow & Arbetsrytmer</h2>
                        <p className={styles.cardDesc}>
                            Jag bygger arbetsflöden och rutiner som eliminerar repetition och stress,
                            och skapar hållbara rytmer under tillväxtperioder.
                        </p>
                        <ul className={styles.cardList}>
                            <li>Automatiseringar (Zapier/Make)</li>
                            <li>Uppföljningsrutiner</li>
                            <li>Onboarding av klienter</li>
                            <li>Återkommande månads- eller veckoprocesser</li>
                            <li>Boknings- och betalningsflöden</li>
                            <li>Processkartläggning</li>
                        </ul>
                        <p className={styles.cardResult}>
                            <strong>Resultat:</strong> Mer tid tillbaka, mindre friktion, arbetsflöde som håller.
                        </p>
                    </div>
                </div>

                {/* Card 3: Operations Partnerskap */}
                <div className={`${styles.card} ${styles.cardSecondary} ${styles.cardPartnerskap} animate-fade-up delay-300`}>
                    <div className={styles.cardBg}></div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardIcon}>★</div>
                        <h2 className={styles.cardTitle}>Operations Partnerskap</h2>
                        <p className={styles.cardDesc}>
                            Jag fungerar som stabilt backend-stöd och hanterar detaljerna
                            så du kan behålla visionen och leda från närvaro.
                        </p>
                        <ul className={styles.cardList}>
                            <li>Projektledning</li>
                            <li>Koordinering av team och externa parter</li>
                            <li>Mötesanteckningar & uppföljningar</li>
                            <li>Enklare hemsideuppdateringar</li>
                            <li>Kundärenden & administration</li>
                            <li>Energiavlastning i intensiva perioder</li>
                        </ul>
                        <p className={styles.cardResult}>
                            <strong>Resultat:</strong> Du kan fokusera på ledarskap och tillväxt medan jag håller i trådarna.
                        </p>
                    </div>
                </div>

                {/* Card 4: Flexibel Premium Support */}
                <div className={`${styles.card} ${styles.cardPrimary} ${styles.cardPremium} animate-fade-up delay-100`}>
                    <div className={styles.cardBg}></div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardIcon}>✦</div>
                        <h2 className={styles.cardTitle}>Flexibel Premium Support</h2>
                        <p className={styles.cardDesc}>
                            För dig som behöver ett mer exklusivt stöd där jag anpassar mig efter din rytm och dina cykler.
                            Perfekt vid lanseringar, tillväxtfaser och intensiva perioder.
                        </p>
                        <ul className={styles.cardList}>
                            <li>Intensivstöd vid lanseringar</li>
                            <li>Strategisk strukturering av nya affärsområden</li>
                            <li>Tillgänglighet när det brinner</li>
                            <li>Anpassad support efter dina behov</li>
                            <li>Prioriterad responstid</li>
                        </ul>
                        <p className={styles.cardResult}>
                            <strong>Resultat:</strong> Du får det stöd du behöver, när du behöver det — utan att behöva förklara eller vänta.
                        </p>
                    </div>
                    <div className={styles.cardAction}>
                        <Link href="/contact" className="btn btn-primary">Fråga om upplägg</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
