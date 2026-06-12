import styles from "./page.module.css";

const ArrowUpRight = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />

      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Clint Pijuan, home">
          CP<span>.</span>
        </a>

        <a
          className={styles.headerLink}
          href="https://github.com/clint77"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <ArrowUpRight />
        </a>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.eyebrow}>
          <span className={styles.statusDot} />
          New site in progress
        </div>

        <h1>
          Clint
          <br />
          <span>Pijuan.</span>
        </h1>

        <p className={styles.intro}>
          A new home for my work, notes, and experiments on the web.
        </p>

        <div className={styles.actions}>
          <a
            className={styles.primaryAction}
            href="https://github.com/clint77"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
            <ArrowUpRight />
          </a>
          <a className={styles.textAction} href="#details">
            About this build
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className={styles.details} id="details">
        <div className={styles.sectionLabel}>01 / Foundation</div>

        <div className={styles.detailsContent}>
          <h2>Starting fresh.</h2>
          <p>
            This site replaces the original React starter with a fast,
            accessible foundation that is ready to grow.
          </p>

          <ul className={styles.stack} aria-label="Technology stack">
            <li>
              <span>Framework</span>
              Next.js
            </li>
            <li>
              <span>Interface</span>
              React
            </li>
            <li>
              <span>Language</span>
              TypeScript
            </li>
            <li>
              <span>Hosting</span>
              Firebase
            </li>
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>pijuan.dev</p>
        <p>Built with Next.js and Firebase.</p>
      </footer>
    </main>
  );
}
