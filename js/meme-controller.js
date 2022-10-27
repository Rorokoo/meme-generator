'use strict'

let gElCanvas
let gCtx

function renderMeme() {
  gElCanvas = document.getElementById('meme-canvas')
  gCtx = gElCanvas.getContext('2d')

  drawMeme()
  //   window.addEventListener('resize', resizeCanvas)
}

function drawMeme() {
  const { imgUrl, lines } = getMeme()

  const img = new Image()
  img.src = imgUrl
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    lines.forEach((line) => drawText(line))
  }
}

function drawText(textProps) {
  const { text, textColor, fontSize, position } = textProps
  gCtx.lineWidth = 5
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = textColor
  gCtx.font = `${fontSize}px Impact`
  gCtx.fillText(text, position.x, position.y)
  gCtx.strokeText(text, position.x, position.y)
}

function handleTextInput(event) {
  event.preventDefault()
  var text = event.target.value
  setLineText(text)
  drawMeme()
}

function handleColorInput(event) {
  event.preventDefault()
  var color = event.target.value
  setTextColor(color)
  drawMeme()
}

function onChangeFontSize(elButton) {
  if (elButton.value === '+') increaseFont()
  else decreaseFont()
  drawMeme()
}

function onSwitchLine() {
  changeEditedLine()
  var currText = getEditedText()
  var elTextInput = document.querySelector('[name="meme-text"]')
  elTextInput.value = currText
}

// function resizeCanvas() {
//   if (window.innerWidth === 1140) { --not workinf well
//     gElCanvas.width -= 90
//     gElCanvas.height -= 90
//     drawMeme()
//   }
// }
