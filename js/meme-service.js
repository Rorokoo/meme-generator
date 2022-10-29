'use strict'

var gMeme = {
  imgUrl: 'img/1.jpg',
  lines: createTextLines(),
  selectedTextIdx: 0,
  isLineSelected: false,
}

function createTextLines() {
  return [
    {
      idx: 0,
      text: '',
      textColor: 'white',
      fontSize: 70,
      position: { x: 30, y: 75 },
    },
    {
      idx: 1,
      text: '',
      textColor: 'white',
      fontSize: 70,
      position: { x: 30, y: 552 },
    },
  ]
}

function getMeme() {
  return gMeme
}

function changeSelectedLine() {
  gMeme.selectedTextIdx = gMeme.selectedTextIdx === 0 ? 1 : 0
}

function selectLine() {
  gMeme.isLineSelected = true
}

function unSelectLine() {
  gMeme.isLineSelected = false
}

function isLineSelected() {
  return gMeme.isLineSelected
}

function getSelectedText() {
  return gMeme.lines[gMeme.selectedTextIdx].text
}

function getSelectedTextIdx() {
  return gMeme.selectedTextIdx
}

function setLineText(txt) {
  gMeme.lines[gMeme.selectedTextIdx].text = txt
}

function setImg(imgID) {
  gMeme.imgUrl = `img/${imgID}.jpg`
}

function setTextColor(color) {
  gMeme.lines[gMeme.selectedTextIdx].textColor = color
}

function increaseFont() {
  gMeme.lines[gMeme.selectedTextIdx].fontSize += 5
}

function decreaseFont() {
  gMeme.lines[gMeme.selectedTextIdx].fontSize -= 5
}
