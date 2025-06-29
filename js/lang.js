<script>
  document.addEventListener('DOMContentLoaded', () => {
    const lang = detectUserLang();             // 'en' أو 'ar'
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    // مثال: تبديل شعار ورابط رئيسي
    const logo = document.getElementById('logo-img');
    const link = document.getElementById('logo-link');
    logo.src  = `/logo-${lang}.png`;
    link.href = `/${lang}/index.html`;
  });
</script>
