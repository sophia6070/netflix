const contents = document.querySelectorAll('.content')

// console.log(contents)

contents.forEach((item) => {
  item.addEventListener('click', function () {
    // console.log(this)
    this.classList.toggle('active')
  })
})
