function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar tag img
  const img = document.querySelector('#profile img')

  // substituir a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode,  adicionar a imagem light
    img.setAttribute('src', './Assents/EU-light.png')
  } else {
    // se tiver sem o light mode, manter normal
    img.setAttribute('src', './Assents/Eu.jpg')
  }
}
