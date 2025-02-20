// main.js
// アコーディオンの実装
document.querySelectorAll('.accordion').forEach(accordion => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('active');
  });
});

// スクロールアニメーション
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.classList.add('active');
    }
  });
});
