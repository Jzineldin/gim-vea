'use client';

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroOverlay}></div>

        <div className={`${styles.heroContent} animate-fade-up`}>
          <h1 className={styles.heroTitle}>
            <span className="animate-fade-in delay-100">GIM-VEA</span>
            Grace in Motion
          </h1>
          <p className={styles.heroSubtag}>VIRTUAL EXECUTIVE ASSISTANT</p>
          <Image
            src="/images/logga-cirkel.png"
            alt="GIM-VEA Logo"
            width={260}
            height={260}
            className={`${styles.heroLogo} animate-fade-in delay-300`}
          />
        </div>
      </section>

      {/* Main Tagline Section */}
      <section className={styles.section}>
        <div className="container">
          <div className="animate-fade-up">
            <h2 className={styles.taglineHeading}>
              När struktur möter din energi blir expansion naturlig.
            </h2>
            <p className={styles.taglineText}>
              Du är här för att leda – och det blir lättare när du inte bär allt själv.
              Med rätt stöd får du tillbaka utrymmet att tänka, skapa och vara närvarande i ditt uppdrag.
              Jag hjälper dig skapa klarhet, ordning och flow i din verksamhet – i grace, i rytm och med medveten riktning.
            </p>
            <div className={styles.ctaCenter}>
              <Link href="/contact" className="btn btn-primary">
                Boka ett möte
              </Link>
            </div>
          </div>

          {/* Vision Quote */}
          <div className={styles.visionQuote}>
            <ScrollReveal direction="left">
              <p className={styles.quoteText}>You bring the vision.</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <p className={styles.quoteText}>I hold the structure.</p>
            </ScrollReveal>
            <ScrollReveal direction="bottom" delay={400}>
              <p className={styles.quoteSubtext}>
                Together we create the clarity and rhythm your business needs to grow with ease.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4 Service Pillars */}
      <section className={styles.section}>
        <div className="container">
          <ScrollReveal direction="bottom">
            <div className={styles.grid}>
              <Link
                href="/services"
                className={`${styles.card} ${styles.cardKlarhet}`}
              >
                <div className={styles.cardBg}></div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Klarhet & Struktur</h3>
                  <p className={styles.cardText}>
                    Jag organiserar ditt digitala landskap — mejl, kalender, system och mappar — så allt blir lätt att navigera och hållbart över tid.
                  </p>
                </div>
              </Link>
              <Link
                href="/services"
                className={`${styles.card} ${styles.cardFlow}`}
              >
                <div className={styles.cardBg}></div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Flow & Arbetsrytmer</h3>
                  <p className={styles.cardText}>
                    Jag optimerar dina arbetsflöden, rutiner och processer så du får tid, energi och fokus tillbaka.
                  </p>
                </div>
              </Link>
              <Link
                href="/services"
                className={`${styles.card} ${styles.cardPartnerskap}`}
              >
                <div className={styles.cardBg}></div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Operations Partnerskap</h3>
                  <p className={styles.cardText}>
                    Jag håller rytmen, projekten och backend-strukturen i rörelse så du kan leda från närvaro och expansion.
                  </p>
                </div>
              </Link>
              <Link
                href="/services"
                className={`${styles.card} ${styles.cardPremium}`}
              >
                <div className={styles.cardBg}></div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Flexibel Premium Support</h3>
                  <p className={styles.cardText}>
                    Anpassad support när du behöver det – från ad-hoc-uppgifter till löpande stöd i din vardag.
                  </p>
                </div>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Value Propositions */}
      <section className={styles.section}>
        <div className="container">
          <ScrollReveal direction="bottom">
            <div className={styles.valueGrid}>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Mer space i din vardag</h3>
                <p className={styles.valueText}>
                  Du får en business som känns lättare och mindre splittrad.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Stabilare energi & närvaro</h3>
                <p className={styles.valueText}>
                  Du slipper bära allt själv — och kan vara mer närvarande i ditt ledarskap.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Hållbar expansion</h3>
                <p className={styles.valueText}>
                  Du bygger vidare från en stabil grund som ger trygg växt, både i energi och resultat.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="bottom" delay={200}>
            <div className={styles.ctaCenter}>
              <Link href="/services" className="btn btn-glass">
                Se alla tjänster jag erbjuder
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <ScrollReveal direction="bottom">
            <h2 className={styles.testimonialsHeading}>
              Så här upplever kunder samarbetet
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="bottom" delay={200}>
            <TestimonialCarousel />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
