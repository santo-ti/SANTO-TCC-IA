import Header from './components/Header';
import HouseButton from './components/HouseButton';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="main-section">
          <div className="container text-center">
            <hr className="mb-5" />
            <HouseButton />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
