'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './TestimonialCarousel.module.css';

interface Testimonial {
  id: number;
  quote: string[];
  author: string;
  title: string;
  image?: string;
  imageAlt?: string;
  logo?: string;
  logoAlt?: string;
  logoDark?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: [
      '"Att arbeta med Monika har varit en total game changer för mig. Hon är alltid positiv, lösningsorienterad och har en förmåga att skapa struktur på ett sätt som gör allt både enklare och roligare. Med sin glada energi och sitt naturliga driv håller hon ordning på det som behöver göras, utan att jag ens behöver be om det.',
      'Hon är inte bara effektiv och självgående, hon vågar också säga ifrån när något kan göras bättre eller tydligare, vilket jag uppskattar enormt.',
      'Hennes kombination av glädje, integritet och initiativkraft gör att jag kan fokusera på det jag verkligen brinner för, med full tillit till att allt runt omkring fungerar.',
      'Samarbetet med Monika har gett mig mer struktur, lugn och arbetsglädje än jag trodde var möjligt."'
    ],
    author: 'Anna Ugander',
    title: 'VD för AIMin.org',
    image: '/images/anna-ugander.jpg',
    imageAlt: 'Anna Ugander',
    logo: '/images/aimin-logo.jpg',
    logoAlt: 'AIMin.org'
  },
  {
    id: 2,
    quote: [
      '"Monika kom in som en frisk fläkt när Tale Forge behövde struktur och framåtdriv. Hon hjälpte oss sätta upp investerarpipelines, koordinera skolpiloter och få igång en riktig content-plan – allt medan hon testade produkten med sina egna barn för att ge genuin feedback.',
      'En virtuell assistent som verkligen förstår startup-världen."'
    ],
    author: 'Kevin Elzarka',
    title: 'Grundare, Tale Forge AB',
    image: '/images/kevin-elzarka.png',
    imageAlt: 'Kevin Elzarka',
    logo: '/images/tale-forge-logo.png',
    logoAlt: 'Tale Forge'
  },
  {
    id: 3,
    quote: [
      '"Att arbeta med Monika har varit både tryggt och smidigt. Hon har haft full koll på fakturering och administrativa flöden, men framför allt varit extremt flexibel och lösningsfokuserad när saker förändrats.',
      'Hon ser helheten, tar ansvar och skapar lugn även när det är mycket på gång. Allt hon gör präglas av engagemang, värme och genuin glädje."'
    ],
    author: 'Shima Moradi Andersson',
    title: 'Ekonomichef, BEAC Mundial',
    image: '/images/shima.jpg',
    imageAlt: 'Shima Moradi Andersson',
    logo: '/images/beac-realestate-logo-white-1.svg',
    logoAlt: 'BEAC Mundial',
    logoDark: true
  }
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (testimonials.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000); // 8 seconds per testimonial

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      (current + 1) % testimonials.length
    );
  };

  return (
    <div
      className={styles.carouselWrapper}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.carousel}>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}
          >
            <div className={styles.content}>
              {testimonial.quote.map((paragraph, pIndex) => (
                <p key={pIndex} className={styles.quote}>
                  {paragraph}
                </p>
              ))}
              <div className={styles.authorSection}>
                {testimonial.logo && (
                  <div className={`${styles.logoWrapper} ${testimonial.logoDark ? styles.logoWrapperDark : ''}`}>
                    <Image
                      src={testimonial.logo}
                      alt={testimonial.logoAlt || ''}
                      width={60}
                      height={60}
                      className={styles.logo}
                    />
                  </div>
                )}
                <p className={styles.author}>
                  <strong>{testimonial.author}</strong>
                  <br />
                  {testimonial.title}
                </p>
              </div>
            </div>
            {testimonial.image && (
              <div className={styles.imageWrapper}>
                <Image
                  src={testimonial.image}
                  alt={testimonial.imageAlt || testimonial.author}
                  width={400}
                  height={500}
                  className={styles.image}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {testimonials.length > 1 && (
        <>
          <button
            type="button"
            className={`${styles.navButton} ${styles.navPrev}`}
            onClick={goToPrev}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>
          <button
            type="button"
            className={`${styles.navButton} ${styles.navNext}`}
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,6 15,12 9,18" />
            </svg>
          </button>
          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                type="button"
                key={index}
                className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Export the testimonials array so it can be extended
export { testimonials };
export type { Testimonial };
