<form name="myForm" action="" method="GET">
  Enter something in the box: <br>
  <input type="text" name="inputbox" value="">
  <input type="button" name="button" value="Click" onClick="testResults(this.form)">
</form>

function testResults (form) {
    var inputValue = form.inputbox.value;
    alert ("You typed: " + inputValue);
}




let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}