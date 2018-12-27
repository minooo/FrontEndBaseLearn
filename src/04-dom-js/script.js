function onImg() {
    const box = document.querySelector('#my-img-box')
  if (box) {
    document.body.removeChild(box)
  } else {
    const div = document.createElement('div')
    div.classList.add('m-box')
    div.onclick = onImg
    div.setAttribute('id', 'my-img-box')
    const img = document.createElement('img')
    img.classList.add('m-drop')
    img.src = 'http://public.duduapp.net/finance/pc-static/img/top_speed_type_0.png'
    div.appendChild(img)
    document.body.appendChild(div)
  }
  }
  