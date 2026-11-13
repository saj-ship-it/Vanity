import React from 'react';
import Link from 'next/link';
import { useSite, PageMeta, GlobalStyles, SiteHeader, SiteFooter, CONTACT_EMAIL } from './Site';

// Renders a paragraph, turning {email} into a mailto link
const Paragraph = ({ text }) => {
  const parts = text.split('{email}');
  return (
    <p>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>}
        </React.Fragment>
      ))}
    </p>
  );
};

export default function LegalPage({ page, path }) {
  const { locale, t } = useSite();
  const doc = t.legalPages[page];
  return (
    <div className="page">
      <PageMeta title={`${doc.title} | Authentic Intelligence`} description={`${doc.title}: Authentic Intelligence, AUi Terminal.`} path={path} />
      <GlobalStyles />
      <SiteHeader />
      <main className="main">
        <article className="legal">
          <Link href="/" locale={locale} className="back-link">&larr; {t.back}</Link>
          <h1>{doc.title}</h1>
          <p className="eyebrow">{t.updated}</p>
          {doc.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((text) => <Paragraph key={text} text={text} />)}
            </section>
          ))}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
