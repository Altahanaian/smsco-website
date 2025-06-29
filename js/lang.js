(function() {
  const stored = localStorage.getItem('smsco-lang');
  let lang = stored || (navigator.language.startsWith('en') ? 'en' : 'ar');
  const params = new URLSearchParams(window.location.search);
  if (['en','ar'].includes(params.get('lang'))) {
    lang = params.get('lang');
    localStorage.setItem('smsco-lang', lang);
  }
  // expose to global
  window.detectUserLang = () => lang;
})();
