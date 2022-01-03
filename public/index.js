//Scroll
window.addEventListener('scroll', function(){
  const header = this.document.querySelector('header')
  header.classList.toggle("sticky", window.scrollY > 0)
})

//Menu
function menu_toggle(){
  const menu_toggle = document.querySelector('.menu_toggle')
  const navigation = document.querySelector('.navigation')

  navigation.classList.toggle('active')
  menu_toggle.classList.toggle('active')
}
