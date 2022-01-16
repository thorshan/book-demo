
// Detail view function
function openForm(){
    var seedetail = document.getElementById('user')
    seedetail.style.display = "flex"
}

function closeForm(){
    var seedetail = document.getElementById('user')
    seedetail.style.display = "none"

} //


// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
} //

// Detail view function
function openView(){
    var seedetail = document.getElementById('detail-view')
    seedetail.style.display = "flex"
}

function closeView(){
    var seedetail = document.getElementById('detail-view')
    seedetail.style.display = "none"

} //