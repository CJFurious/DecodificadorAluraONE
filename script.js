const inputTexto = document.querySelector('#entrada-mensagem')
const outputTexto = document.querySelector('#saida-mensagem')

function btnEncriptar() {
  const textoCriptografado = encriptar(inputTexto.value)
  if (textoCriptografado != '') {
    outputTexto.value = textoCriptografado
    mostraMensagem()
  } else {
    alert('Digite um texto para começar')
  }
}

function encriptar(stringEncriptada) {
  stringEncriptada = stringEncriptada.toLowerCase()
  let mensagem = stringEncriptada.split('')

  for (var x = 0; x < mensagem.length; x++) {
    if (mensagem[x] == 'a') {
      mensagem[x] = 'ai'
    }
    if (mensagem[x] == 'e') {
      mensagem[x] = 'enter'
    }
    if (mensagem[x] == 'i') {
      mensagem[x] = 'imes'
    }
    if (mensagem[x] == 'o') {
      mensagem[x] = 'ober'
    }
    if (mensagem[x] == 'u') {
      mensagem[x] = 'ufat'
    }
  }

  stringEncriptada = mensagem.join('')
  return stringEncriptada
}

function btnDesencriptar() {
  const textoDescriptografado = desencriptar(inputTexto.value)
  if (textoDescriptografado != '') {
    //Não executa sem mensagem inserida
    outputTexto.value = textoDescriptografado
    mostraMensagem()
  } else {
    alert('Digite um texto para começar')
  }
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ]
  stringDesencriptada = stringDesencriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      )
    }
  }

  return stringDesencriptada
}

function mostraMensagem() {
  document.getElementById('sem-codigo').style.display = 'none'
  document.getElementById('com-codigo').style.display = 'block'
}

function btnCopiar() {
  let copyText = document.querySelector('#saida-mensagem')
  copyText.select()
  navigator.clipboard.writeText(copyText.value)
  copyText.value = ''
}

function btnReset() {
  document.getElementById('sem-codigo').style.display = 'block'
  document.getElementById('com-codigo').style.display = 'none'
  document.getElementById('saida-mensagem').value = ''
  document.getElementById('entrada-mensagem').value = ''
}
