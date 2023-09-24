import bookdata from "../data/bookdata.json";

export default function Book() {
  console.log(bookdata.library[0].book.ISBN);

  return bookdata.library.map((book) => {
    return <img key={book.book.ISBN} src={book.book.cover} />;
  });
}
