import Header from './components/Header';
import KalahMain from './components/KalahMain';
import KalahGroupHouseButton from './components/KalahGroupHouseButton';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="main-section">
          <div className="container text-center">
            <hr className="mb-5" />
            <div className="d-inline-flex justify-content-center">
              <KalahMain />
              <KalahGroupHouseButton />
              <KalahMain />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
