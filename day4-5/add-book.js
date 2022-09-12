document.querySelector("#home-button").addEventListener("click", () => {
  navigate("./index.html");
});

const booklist = new BookList()

document.querySelector("#submit-button").addEventListener("click", () => {
  let title = document.querySelector("#add-book-title");
  let author = document.querySelector("#add-book-author");
  let image = document.querySelector("#add-book-image");
  booklist.addNewBook(
    new Book(title.value, author.value, image.value)
  );
});
