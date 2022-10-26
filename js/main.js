'use strict'

function onInit() {
  renderGallery()
}

function switchPageMode() {
  const gallery = document.querySelector('.gallery-container')
  const editor = document.querySelector('.editor-container')
  gallery.classList.toggle('closed')
  editor.classList.toggle('closed')
}
