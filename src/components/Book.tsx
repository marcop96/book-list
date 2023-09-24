import bookdata from "../data/bookdata.json";

export default function Book() {
  return (
    <>
      {bookdata.library.map((book) => (
        <div key={book.book.ISBN}>
          <img
            src={book.book.cover}
            alt={book.book.title}
            className="object-cover  inset-0 w-full h-full"
          />
        </div>
      ))}
      ;
    </>
  );
}
