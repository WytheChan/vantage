 const anchors = function (id,active,first) {
  var dom = document.querySelector('#' + id)
  var a = document.querySelector(`a[href="#${id}"]`)
  active = parseInt(a.dataset.index)
  if (id === first) {
    window.scrollTo(0, 0)
  } else {
    dom.scrollIntoView()
  }
}


export default anchors