import React, { useState } from 'react';
import Link from 'next/link';
import { useSite, CONTACT_EMAIL } from './Site';

// Delivered to CONTACT_EMAIL by FormSubmit (formsubmit.co). The first submission sends an
// activation email to that inbox; submissions are delivered once the link in it is clicked.
const ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export default function ContactForm() {
  const { locale, t } = useSite();
  const f = t.form;
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // Bots fill the hidden field; pretend success and send nothing
    if (data._honey) { setStatus('sent'); return; }
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          organisation: data.organisation,
          interest: data.interest,
          sector: data.sector,
          message: data.message,
          language: locale.toUpperCase(),
          _subject: `${f.subject} — ${data.organisation || data.name}`,
          _replyto: data.email,
          _template: 'table',
          _captcha: 'false'
        })
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok && String(body.success) === 'true') { setStatus('sent'); e.target.reset?.(); }
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="form-success" role="status">
        <h4>{f.successTitle}</h4>
        <p className="body">{f.successBody}</p>
      </div>
    );
  }

  const req = <span className="req" aria-hidden="true">*</span>;
  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="cf-name">{f.name}{req}</label>
        <input id="cf-name" name="name" type="text" autoComplete="name" required maxLength={120} />
      </div>
      <div className="field">
        <label htmlFor="cf-email">{f.email}{req}</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required maxLength={200} />
      </div>
      <div className="field">
        <label htmlFor="cf-org">{f.org}{req}</label>
        <input id="cf-org" name="organisation" type="text" autoComplete="organization" required maxLength={200} />
      </div>
      <div className="field">
        <label htmlFor="cf-interest">{f.interest}</label>
        <select id="cf-interest" name="interest" defaultValue={f.interests[0]}>
          {f.interests.map((i) => <option key={i} value={i}>{i}</option>)}
        </select>
      </div>
      <div className="field field-wide">
        <label htmlFor="cf-sector">{f.sector}</label>
        <select id="cf-sector" name="sector" defaultValue="">
          <option value="" disabled>{f.sectorPlaceholder}</option>
          {t.serve.sectors.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
          <option value={f.other}>{f.other}</option>
        </select>
      </div>
      <div className="field field-wide">
        <label htmlFor="cf-message">{f.message}{req}</label>
        <textarea id="cf-message" name="message" required maxLength={4000} placeholder={f.messagePlaceholder} />
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-honey">Leave empty</label>
        <input id="cf-honey" name="_honey" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-actions field-wide">
        <p className="form-note">{f.consent}<Link href="/privacy" locale={locale}>{f.privacy}</Link>.</p>
        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? f.sending : f.submit}
        </button>
      </div>
      {status === 'error' && (
        <p className="form-status field-wide" role="alert">
          {f.error}<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      )}
    </form>
  );
}
