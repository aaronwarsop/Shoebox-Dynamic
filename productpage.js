const pageContainer = document.querySelector(".page-content");
const productImage = pageContainer.querySelectorAll("img");

// goes through each image and assigns enlarged-img class to the parent node (article) so the image will move with all associated text
productImage.forEach(img => {
  img.addEventListener("mouseenter", () => {
    let parent = img.parentNode;
    parent.classList.add("enlarged-img");
  });
});

// removes class on re-click
productImage.forEach(img => {
  img.addEventListener("mouseleave", () => {
    let parent = img.parentNode;
    parent.classList.remove("enlarged-img");
  });
});