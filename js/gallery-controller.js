'use strict'

function renderGallery() {
  const gallery = document.querySelector('.gallery-container')
  var images = getImages()
  var strHTML = images.map(
    (image) =>
      `<image src="img/${image.id}.jpg" data-id="${image.id}" onclick= "onImageSelect(this)">`
  )
  gallery.innerHTML = strHTML.join('')
}

function onImageSelect(elImg) {
  switchPageMode()
  setImg(elImg.dataset.id)
  renderMeme()
}
