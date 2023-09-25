export default function BooksCover(book) {
  console.log(book);
  return (
    <>
      <div className="border-2 border-black ">
        <img className="w-full h-full" src={book.cover} alt={book.title} />
      </div>
    </>
  );
}
