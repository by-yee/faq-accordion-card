var item = document.getElementsByClassName("card__ques");

for (var i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function() {
    
    var isActive = !this.classList.contains("card__ques--active");

    // Close active item
    var allItem = document.getElementsByClassName("card__ques");
    for (var j = 0; j < allItem.length; j++) {
      allItem[j].classList.remove("card__ques--active");
      allItem[j].classList.remove("card__ques--icon");
      allItem[j].nextElementSibling.style.display = "none";
    }

    if(isActive) {
      this.classList.toggle("card__ques--active");
      this.classList.toggle("card__ques--icon");
      this.nextElementSibling.style.display = "block";
    }
  });
}