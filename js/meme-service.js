'use strict'

var gImages = [
  { id: 1, url: 'img/1.jpg', keywords: ['funny'] },
  { id: 2, url: 'img/2.jpg', keywords: ['funny'] },
]

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
      position: { x: 20, y: 450 },
    },
  ]
}

function getMeme() {
  return gMeme
}

function getImages() {
  return gImages
}

function changeEditedLine() {
  gMeme.editedTextIdx = gMeme.editedTextIdx === '0' ? '1' : '0'
}

function setLineText(txt) {
  gMeme.lines[gMeme.editedTextIdx].text = txt
  return gMeme.lines[gMeme.editedTextIdx].text
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
