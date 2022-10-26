'use strict'

var gElCanvas
let gCtx

function renderMeme() {
  gElCanvas = document.getElementById('meme-canvas')
  gCtx = gElCanvas.getContext('2d')
  drawMeme()
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
  var lineIdx = getEditedTextIdx()
  var text = event.target.value
  setLineText(lineIdx, text)
  renderMeme()
}

function handleColorInput(event) {
  var lineIdx = getEditedTextIdx()
  event.preventDefault()
  var color = event.target.value
  setTextColor(lineIdx, color)
  renderMeme()
}

function changeFontSize(elButton) {
  var lineIdx = getEditedTextIdx()
  if (elButton.value === '+') increaseFont(lineIdx)
  else decreaseFont(lineIdx)
  renderMeme()
}

function onSwitchLine() {
  changeEditedLine()
  var meme = getMeme()
  var line = getEditedTextIdx()
  document.querySelector('[name="meme-text"]').value = meme.lines[line].text
}
