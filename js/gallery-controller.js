'use strict'

function renderGallery() {
  const gallery = document.querySelector('.grid-gallery')
  var images = getImages()
  var strHTML = images.map(
    (image) =>
      `<image class="gallery-img" src="img/${image.id}.jpg" data-id="${image.id}" onclick= "onImageSelect(this)">`
  )
  gallery.innerHTML = strHTML.join('')
}

function onImageSelect(elImg) {
  switchToEditor()
  setImg(elImg.dataset.id)
  renderMeme()
}
