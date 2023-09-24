import bookdata from "../data/bookdata.json";

export default function Book() {
  return (
    <>
      {bookdata.library.map((book) => (
        <div key={book.book.ISBN} className="md:col-span-2">
          <img
            src={book.book.cover}
            alt={book.book.title}
            className=" w-full h-full"
          />
        </div>
      ))}
    </>
  );
}
