document.querySelector("#home-button").addEventListener("click", () => {
  navigate("./index.html");
});

document.querySelector("#submit-button").addEventListener("click", () => {
  let title = document.querySelector("#add-book-title");
  let author = document.querySelector("#add-book-author");
  let image = document.querySelector("#add-book-image");
  addNewBook({
    title: title.value,
    author: author.value,
    imageURL: image.value,
  });
});
