'use strict'

var gMeme = {
  imgUrl: 'img/1.jpg',
  lines: createTextLines(),
  selectedLineIdx: 0,
  isLineSelected: false,
  lineRect: [],
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
  gMeme.selectedLineIdx = gMeme.selectedLineIdx === 0 ? 1 : 0
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

function getSelectedLine() {
  return gMeme.lines[gMeme.selectedLineIdx]
}

function getSelectedLineIdx() {
  return gMeme.selectedLineIdx
}

function setLineText(txt) {
  gMeme.lines[gMeme.selectedLineIdx].text = txt
}

function setImg(imgID) {
  gMeme.imgUrl = `img/${imgID}.jpg`
}

function setTextColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].textColor = color
}

function increaseFont() {
  gMeme.lines[gMeme.selectedLineIdx].fontSize += 5
}

function decreaseFont() {
  gMeme.lines[gMeme.selectedLineIdx].fontSize -= 5
}

function saveLine(line) {
  var selectedIdx = getSelectedLineIdx()

  gMeme.lines[selectedIdx] = line
}
