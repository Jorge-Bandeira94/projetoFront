console.log('java script funcionando!')

function validaEmail(email) {
  const lista = [
    '@hotmail.com',
    '@gmail.com',
    '@outlook.com',
    '@bol.com',
    '@yahoo.com',
    '@ig.com'
  ]
  if (email.length === 0) {
    return false
  } else {
    for (let i = 0; i <= lista.length; i++) {
      if (email.includes(lista[i])) {
        return true
      }
    }
  }
}

//Vamos linkar nosos formulario com este .js
function validacao() {
  alert('Valindando email...')
  //vamos capturar a informação vinda do form
  let email = document.getElementById('email_digitado').value
  let resultadoValidacao = validaEmail(email)
  if (resultadoValidacao == true) {
    document.getElementById('success').style.display = 'block'
  } else {
    document.getElementById('error').style.display = 'block'
  }
}
