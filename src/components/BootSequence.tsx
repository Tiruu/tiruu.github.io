import { useEffect, useState } from "react";
import "../boot.css";

function TiruuMark() {
  return (
    <img
      className="boot-mark-svg"
      src="/images/tiruu-logo.png"
      alt="Tiruu"
      draggable={false}
    />
  );
}

export default function BootSequence() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisible(false);
      return;
    }

    const finish = () => {
      setClosing(true);
      window.setTimeout(() => setVisible(false), 260);
    };

    const timer = window.setTimeout(finish, 1220);
    const skip = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === " ") finish();
    };

    window.addEventListener("keydown", skip);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", skip);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`boot-screen ${closing ? "boot-screen-closing" : ""}`} role="status" aria-label="Chargement du portfolio">
      <div className="boot-vignette" aria-hidden="true" />
      <div className="boot-scanlines" aria-hidden="true" />
      <div className="boot-noise" aria-hidden="true" />

      <div className="boot-stage">
        <div className="boot-wordmark" aria-hidden="true">
          <span>TIRUU</span><strong>SLOW</strong>
        </div>
        <div className="boot-mark">
          <TiruuMark />
        </div>
      </div>

      <div className="boot-status" aria-hidden="true">
        <span>© TIRUU</span>
        <span className="boot-status-line" />
        <span>BOOT</span>
      </div>
    </div>
  );
}
