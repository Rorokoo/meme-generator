'use strict'

function onInit() {
  renderGallery()
}

function switchToGallery() {
  const gallery = document.querySelector('.gallery-container')
  const editor = document.querySelector('.editor-container')
  gallery.classList.remove('closed')
  editor.classList.add('closed')
}

function switchToEditor() {
  const gallery = document.querySelector('.gallery-container')
  const editor = document.querySelector('.editor-container')
  gallery.classList.toggle('closed')
  editor.classList.toggle('closed')
}

function openGallery() {
  const gallery = document.querySelector('.gallery-container')
  if (gallery.className.includes('closed')) {
    switchToGallery()
    renderGallery()
  } else return
}
