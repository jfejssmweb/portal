function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("endcontainerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}