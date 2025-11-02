export default function WinMessage({ seconds, onClose }) {
  return (
    <div className="win-overlay" onClick={onClose}>
      <div className="win-popup" onClick={e => e.stopPropagation()}>
        Congratulations, you win in {seconds} seconds!
      </div>
    </div>
  );
}