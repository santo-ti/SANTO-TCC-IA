import KalahHouseButton from '../KalahHouseButton';

function KalahGroupHouseButton() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center mx-3">
      <div className="btn-group btn-group-lg mb-3" role="group" aria-label="Large button group">
        <KalahHouseButton />
        <KalahHouseButton />
        <KalahHouseButton />
        <KalahHouseButton />
        <KalahHouseButton />
      </div>
      <div className="btn-group btn-group-lg mb-3" role="group" aria-label="Large button group">
        <KalahHouseButton />
        <KalahHouseButton />
        <KalahHouseButton />
        <KalahHouseButton />
        <KalahHouseButton />
      </div>
    </div>
  );
}

export default KalahGroupHouseButton;
