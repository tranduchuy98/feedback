document.addEventListener("DOMContentLoaded", function() {
    resizeMain()
    window.addEventListener('resize', resizeMain)
  })
  
  function resizeMain() {
    let headerAndFooter = document.querySelector('header').offsetHeight + document.querySelector('footer').offsetHeight
    document.querySelector('main').style.height = (window.innerHeight - headerAndFooter) + 'px'
  }
  
  function redirectHomePage() {
    window.location.href = 'https://www.facebook.com/gyushigenguuphonvn/'
  }
  