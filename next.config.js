/** @type {import('next').NextConfig} */
module.exports = {
  // English at /, French at /fr. Visitors choose with the EN | FR switch;
  // no automatic redirect based on browser language.
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: false
  }
};
