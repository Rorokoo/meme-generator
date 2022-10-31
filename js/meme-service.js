'use strict'

var gMeme = {
  imgUrl: 'img/1.jpg',
  lines: createTextLines(),
  selectedLineIdx: 0,
  isLineSelected: false,
}

function createTextLines() {
  return [
    {
      id: 0,
      text: 'enter text',
      textColor: 'white',
      fontSize: 70,
      position: { x: 30, y: 75 },
    },
    {
      id: 1,
      text: 'enter text',
      textColor: 'white',
      fontSize: 70,
      position: { x: 30, y: 552 },
    },
  ]
}

function createTextLine() {
  return {
    id: makeId(),
    text: 'enter text',
    textColor: 'white',
    fontSize: 70,
    position: { x: null, y: null },
  }
}

function getMeme() {
  return gMeme
}

function changeSelectedLine() {
  var currLineIdx = gMeme.selectedLineIdx
  var nextLineIdx = currLineIdx + 1
  nextLineIdx = !gMeme.lines[nextLineIdx] ? 0 : currLineIdx + 1
  gMeme.selectedLineIdx = nextLineIdx
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
  if (!gMeme.lines[gMeme.selectedLineIdx]) gMeme.selectedLineIdx = 0
  return gMeme.lines[gMeme.selectedLineIdx]
}

function getSelectedLineId() {
  return gMeme.lines[gMeme.selectedLineIdx].id
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
  gMeme.lines[gMeme.selectedLineIdx] = line
}

function eraseLine() {
  var id = getSelectedLineId()

  var line = gMeme.lines.find((line) => line.id === id)

  var lineIdx = gMeme.lines.indexOf(line)
  gMeme.lines.splice(lineIdx, 1)
}

function addLine(line) {
  gMeme.lines.push(line)
}

function setSelectedLine(id) {
  var line = gMeme.lines.find((line) => line.id === id)
  var lineIdx = gMeme.lines.indexOf(line)
  gMeme.selectedLineIdx = lineIdx
}
