'use strict'

var gMeme = {
  imgUrl: 'img/1.jpg',
  lines: createTextLines(),
  editedTextIdx: '0',
}

function createTextLines() {
  return [
    {
      text: '',
      textColor: 'white',
      fontSize: 80,
      position: { x: 20, y: 100 },
    },
    {
      text: '',
      textColor: 'white',
      fontSize: 80,
      position: { x: 20, y: 400 },
    },
  ]
}

function getMeme() {
  return gMeme
}

function changeEditedLine() {
  gMeme.editedTextIdx = gMeme.editedTextIdx === '0' ? '1' : '0'
}

function getEditedText() {
  return gMeme.lines[gMeme.editedTextIdx].text
}

function setLineText(txt) {
  gMeme.lines[gMeme.editedTextIdx].text = txt
}

function setImg(imgID) {
  gMeme.imgUrl = `img/${imgID}.jpg`
}

function setTextColor(color) {
  gMeme.lines[gMeme.editedTextIdx].textColor = color
}

function increaseFont() {
  gMeme.lines[gMeme.editedTextIdx].fontSize += 5
}

function decreaseFont() {
  gMeme.lines[gMeme.editedTextIdx].fontSize -= 5
}
