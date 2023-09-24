import "./App.css";
import NavBar from "./components/NavBar";
import Book from "./components/Book";
function App() {
  return (
    <>
      <div className="min-w-max h-screen">
        <header className="">
          <NavBar />
        </header>
        <main>
          <Book />
        </main>
      </div>
    </>
  );
}

export default App;
