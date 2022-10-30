'use strict'

let gElCanvas
let gCtx

function renderMeme() {
  gElCanvas = document.getElementById('meme-canvas')
  gCtx = gElCanvas.getContext('2d')
  resizeCanvas()
  addEventListeners()
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
  const { idx, text, textColor, fontSize, position } = textProps
  if (idx === getSelectedLineIdx() && isLineSelected())
    drawRect(text, fontSize, position)
  gCtx.lineWidth = 5
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = textColor
  gCtx.font = `${fontSize}px Impact`
  gCtx.fillText(text, position.x, position.y)
  gCtx.strokeText(text, position.x, position.y)
}

function drawRect(text, fontSize, position) {
  var x = position.x
  var y = position.y - fontSize
  var width = gCtx.measureText(text).width + 20
  var height = fontSize + 20
  gCtx.fillStyle = 'rgb(227, 227, 227,0.5)'

  gCtx.fillRect(x, y, width, height)
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
  changeSelectedLine()
  selectLine()
  focusTextInput()
  drawMeme()
}

function focusTextInput() {
  var currText = getSelectedLine().text
  var elTextInput = document.querySelector('[name="meme-text"]')
  elTextInput.focus()
  elTextInput.value = currText
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
  drawMeme()
}

function handleTextClick(event) {
  event.preventDefault()
  getSelectedLineIdx()
}

function addEventListeners() {
  window.addEventListener('resize', resizeCanvas)
  const elTextInput = document.querySelector('[name="meme-text"]')
  elTextInput.addEventListener('focus', (event) => {
    event.preventDefault()
    selectLine()
    drawMeme()
  })
  elTextInput.addEventListener('focusout', (event) => {
    event.preventDefault()
    unSelectLine()
    drawMeme()
  })
}

function onCenterText() {
  var line = getSelectedLine()
  var canvasCenter = gElCanvas.width / 2
  var lineCenter = gCtx.measureText(line.text).width / 2
  var x = canvasCenter - lineCenter

  line.position.x = x
  saveLine(line)
  focusTextInput()
  drawMeme()
}
