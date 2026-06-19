import './Divider.css';

export default function Divider({ flip = false }) {
  return (
    <div className={`divider ${flip ? 'divider--flip' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
        <path
          d="M0,40 C150,90 350,0 600,30 C850,60 1050,0 1200,40 L1200,80 L0,80 Z"
          fill="var(--bg-soft)"
        />
        <path
          d="M0,50 C150,95 350,15 600,42 C850,68 1050,15 1200,48"
          fill="none"
          stroke="var(--gold)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
