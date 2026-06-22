window.addEventListener('scroll', function() {
  const cabecalho = document.querySelector('.cabecalho');
  if (!cabecalho) return;

  if (window.scrollY > 1) {
    cabecalho.classList.add('cabecalho--fixo');
  } else {
    cabecalho.classList.remove('cabecalho--fixo');
  }
}, { passive: true });
