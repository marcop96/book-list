import books from "./bookdata.json";

const bookList = books.library.map((item) => {
  const {
    title,
    pages,
    genre,
    cover,
    synopsis,
    year,
    ISBN,
    author: { name, otherBooks },
  } = item.book;

  return {
    title,
    pages,
    genre,
    cover,
    synopsis,
    year,
    ISBN,
    author: {
      name,
      otherBooks,
    },
  };
});

console.log(bookList);
