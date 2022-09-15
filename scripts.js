window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "6%";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.height = "10%";
    document.getElementById("logo").style.fontSize = "35px";
  }
} 