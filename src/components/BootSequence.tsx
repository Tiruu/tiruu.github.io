import { useEffect, useState } from "react";
import "../boot.css";

function TiruuMark() {
  return (
    <svg className="boot-mark-svg" viewBox="0 0 220 220" role="img" aria-label="Tiruu">
      <g className="boot-mark-top">
        <polygon points="20,36 110,0 200,36 110,72" fill="#ffbd16" />
        <polygon points="20,36 110,72 110,120 20,84" fill="#079b3d" />
        <polygon points="110,72 200,36 200,84 110,120" fill="#1233b8" />
        <polygon points="64,36 110,18 156,36 110,54" fill="#ffbd16" />
        <polygon points="64,36 110,54 110,78 64,60" fill="#ff2f24" />
        <polygon points="110,54 156,36 156,60 110,78" fill="#079b3d" />
      </g>
      <g className="boot-mark-legs">
        <polygon points="36,82 82,100 82,220 36,202" fill="#079b3d" />
        <polygon points="82,100 110,88 110,208 82,220" fill="#1233b8" />
        <polygon points="110,88 138,100 138,220 110,208" fill="#ff2f24" />
        <polygon points="138,100 184,82 184,202 138,220" fill="#1233b8" />
      </g>
    </svg>
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
