const img = document.getElementById("hover");

  img.addEventListener("mouseover", function () {
    img.style.width= "600px";
    img.style.height= "600px";
  });

  img.addEventListener("mouseout", function () {
    img.style.width = "400px";
    img.style.height= "400px";
  });