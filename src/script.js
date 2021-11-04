const progressBar = document.getElementsByClassName("bar");
const progressBarText = document.getElementsByClassName(".pb_text");
const myBtn = document.querySelector(".myBtn");
var i = 50;

myBtn.addEventListener("click", function () {
  if (i == 50) {
    i = 51;
    var width = 50;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 50;
      } else {
        width++;
        for (var j = 0; j < progressBar.length; j++) {
          progressBar[j].style.width = width + "%";
        }
        for (var k = 0; k < progressBarText.length; k++) {
          progressBarText[k].innerHTML = width + "%";
        }
      }
    }
  }
});
