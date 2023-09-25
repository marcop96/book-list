export default function BookInfo(props) {
  const book = props.book;
  console.log(book);

  return (
    <div>
      <h1 className="text-2xl">{book.title}</h1>
      <span>
        <p>Year: {book.year}</p>
        <p>Author: {book.author.name}</p>
        <p>Synopsis: {book.synopsis}</p>
        <p>Pages: {book.pages}</p>
        Add more properties as needed
      </span>
    </div>
  );
}
