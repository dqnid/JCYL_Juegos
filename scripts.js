window.onscroll = function() {scrollFunction()};
window.onload = function(){
  var btn = document.getElementById('mapAnimBtn');
  btn.onclick = function(event){
    window.scrollTo(0, 0);
      var mapa = document.getElementById("mapa");
      mapa.children[0].classList.add('animated');
      setTimeout(function(){
        mapa.children[0].classList.remove('animated');
      }, 1000);
  }

  var logo = document.getElementById("logo");
  logo.onclick = function(event){
    window.scrollTo(0, 0);
  }

  document.getElementById("places_btn").onclick = function(event){
    window.scrollTo(0, 0);
    var mapa = document.getElementById("mapa");
    setTimeout(function(){
      mapa.children[0].classList.add('animated');
      setTimeout(function(){
        mapa.children[0].classList.remove('animated');
      }, 1000);},500)
  }
  document.getElementById("places_btn").style.cursor = "pointer";
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 0px";
    document.getElementById("logo").style.height = "75px";
    document.getElementById("logo").style.width = "150px";
  } else {
    document.getElementById("navbar").style.padding = "20px 0px";
    document.getElementById("logo").style.height = "100px";
    document.getElementById("logo").style.width = "200px";
  }
} 

const panels = document.querySelectorAll('.tree_container')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}