<!DOCTYPE html>
<html lang="">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>SMSCO | Redirecting…</title>

  <!-- ضم lang.js مع defer -->
  <script src="/js/lang.js" defer></script>

  <!-- بعد تحميل السكربت، نوجّه المستخدم -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const lang = detectUserLang();   // 'ar' أو 'en'
      document.documentElement.lang = lang;
      document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
      window.location.replace(`/${lang}/index.html`);
    });
  </script>
</head>
<body>
  <noscript>الصفحة تحتاج جافاسكربت لإعادة التوجيه.</noscript>
</body>
</html>
