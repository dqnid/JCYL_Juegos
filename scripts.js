window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "15px 0px";
  } else {
    document.getElementById("navbar").style.padding = "40px 0px";
  }
} 