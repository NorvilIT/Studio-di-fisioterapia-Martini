document.getElementById("form").addEventListener("submit", async function(e) {
  
  e.preventDefault(); // blocca il redirect
  let errore = false;
  const input = ['nome','email','motivo'];
  input.forEach(input => {
    const dati = document.getElementById(input);
    if(dati.value === ''){
      dati.classList.add('errore')
      errore = true;
    } else {
      dati.classList.remove('errore');
    }
  })
  
  if (errore) {
    return
  }

  const form = e.target;
  const data = new FormData(form);

  await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });
   
  //form.reset(); // opzionale: pulisce il form

  document.querySelector('.prima').style.display = 'none';
  document.querySelector('.dopo').style.display = 'flex';
});

const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
    });
  });