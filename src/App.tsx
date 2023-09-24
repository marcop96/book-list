import "./App.css";
import NavBar from "./components/NavBar";
import Book from "./components/Book";
function App() {
  return (
    <>
      <div className="min-w-screen h-screen">
        <header className="">
          <NavBar />
        </header>
        <main>
          <section className="grid grid-cols-4 ">
            <Book />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
