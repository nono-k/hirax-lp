// main.jsに追加
document.querySelectorAll('.frame-221').forEach(item => {
  item.addEventListener('click', () => {
    const content = item.nextElementSibling;
    item.classList.toggle('active');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
