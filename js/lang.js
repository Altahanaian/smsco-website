(function(){
  const key = 'smsco-lang';
  let lang = localStorage.getItem(key)
          || (navigator.language.startsWith('en')?'en':'ar');
  // إذا تم تمرير ?lang= يعلى الرابط
  const p = new URLSearchParams(location.search);
  if (['en','ar'].includes(p.get('lang'))) {
    lang = p.get('lang');
    localStorage.setItem(key, lang);
  }
  window.detectUserLang = () => lang;
})();
