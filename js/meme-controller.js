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
  const { text, textColor, fontSize, position, idx } = textProps
  gCtx.lineWidth = 5
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = textColor
  gCtx.font = `${fontSize}px Impact`
  gCtx.fillText(text, 30, gElCanvas.height / position)
  gCtx.strokeText(text, 30, gElCanvas.height / position)
  if (idx === getSelectedTextIdx() && isLineSelected()) {
    gCtx.fillStyle = 'rgb(0,0,0, 0.3)'
    gCtx.fillRect(
      0,
      gElCanvas.height / position - fontSize,
      gElCanvas.width,
      fontSize + 20
    )
  }
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
  var currText = getSelectedText()
  var elTextInput = document.querySelector('[name="meme-text"]')
  elTextInput.focus()
  elTextInput.value = currText
  drawMeme()
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
  drawMeme()
}

function handleTextClick(event) {
  event.preventDefault()
  console.log('click event fired')
  getSelectedTextIdx()
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
