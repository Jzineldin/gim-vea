import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Om Mig | GIM-VEA",
    description: "Lär känna Monika Björklund - Operations Partner för medvetna ledare och coacher. Baserad på Gran Canaria.",
    openGraph: {
        title: "Om Mig | GIM-VEA",
        description: "Lär känna Monika Björklund - Operations Partner för medvetna ledare och coacher.",
    },
};

export default function About() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <header className={styles.hero}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/image_3.jpg"
                            alt="Monika Björklund"
                            width={200}
                            height={200}
                            className={styles.portrait}
                            priority
                        />
                    </div>
                    <h1 className={styles.title}>Om Mig</h1>
                    <p className={styles.subtitle}>Mellan struktur och stillhet</p>
                </header>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Grace In Motion – av Monika Björklund</h2>
                    <p className={styles.text}>
                        Jag heter Monika Björklund, och mitt hjärta har alltid sökt klarhet, balans och mening – i livet, i relationer och i arbetet. Jag bor på Gran Canaria med min familj, där vardagen får andas i takt med enkelheten, havet och det varma ljuset.
                    </p>
                    <p className={styles.text}>
                        Det är här – i mötet mellan struktur och stillhet – som jag mår som bäst. När jag mediterar, rör mig i naturen eller för samtal som väcker eftertanke, landar jag i samma insikt om och om igen:
                    </p>
                    <p className={styles.quote}>
                        "Ordning skapar utrymme. Utrymme skapar närvaro. Närvaro skapar riktning."
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Min väg hit</h2>
                    <p className={styles.text}>
                        Min karriär började i roller där planering, administration och ledarskap alltid varit centralt. Jag har varit den som håller ihop, organiserar, strukturerar och skapar trygghet – oavsett sammanhang.
                    </p>
                    <p className={styles.text}>Men samtidigt fanns det en längtan efter något mer:</p>
                    <ul className={styles.list}>
                        <li>mer frihet</li>
                        <li>mer autenticitet</li>
                        <li>mer arbete nära människor som vill växa</li>
                        <li>mer meningsfullhet</li>
                    </ul>
                    <p className={styles.text}>
                        Den längtan ledde mig hit. Till Grace In Motion – en plats där jag får kombinera struktur, intuition och omsorg i samarbeten som gör verklig skillnad.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Min filosofi</h2>
                    <p className={styles.text}>
                        För mig är struktur inte kontroll. Det är en form av kärlek. Den skapar:
                    </p>
                    <ul className={styles.list}>
                        <li>frihet</li>
                        <li>kreativitet</li>
                        <li>space</li>
                        <li>enkelhet</li>
                        <li>flow</li>
                    </ul>
                    <p className={styles.text}>
                        Jag tror på system som stöttar – inte styr. Jag tror på rytmer som håller – inte pressar. Och jag tror på företagande som växer inifrån innan det växer utåt.
                    </p>
                    <p className={styles.quote}>
                        "När vi skapar i alignment med vår energi, då växer allt i rätt riktning."
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Mitt arbete idag</h2>
                    <p className={styles.text}>
                        I dag arbetar jag som Operations Partner för medvetna ledare och coacher. Jag hjälper dem skapa den struktur och rytm som gör att de kan:
                    </p>
                    <ul className={styles.list}>
                        <li>leda med närvaro</li>
                        <li>skapa utan stress</li>
                        <li>tryggt hålla sin vision</li>
                        <li>ha utrymme för det som verkligen betyder något</li>
                    </ul>
                    <p className={styles.text}>
                        Jag är här för att avlasta, stabilisera och tydliggöra – så att du kan växa utan att bära allt själv. Mitt arbete handlar inte bara om att "få saker gjorda". Det handlar om att skapa ett system som håller dig, din energi och ditt ledarskap.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Grace in Motion – varför namnet?</h2>
                    <p className={styles.text}>
                        För mig står <strong>Grace</strong> för stillhet, mjukhet och integritet. <strong>Motion</strong> står för riktning, utveckling och rörelse framåt.
                    </p>
                    <p className={styles.text}>
                        Tillsammans beskriver de exakt det jag hjälper dig skapa:
                    </p>
                    <p className={styles.quote}>
                        Stabil grund + mjuk rörelse = hållbar expansion
                    </p>
                </section>

                <div className={styles.cta}>
                    <h2 className={styles.sectionTitle}>Om du känner igen dig</h2>
                    <p className={styles.text}>
                        Om du längtar efter mer ordning, lätthet och space i ditt ledarskap – då är du på rätt plats. När du inte längre behöver bära allt, öppnas utrymme för det som verkligen vill ta form genom dig.
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                        Boka ett samtal med mig
                    </Link>
                </div>
            </div>
        </div>
    );
}
