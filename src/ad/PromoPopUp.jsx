import { useState, useEffect } from "react";
import "./PromoPopUp.css";

function PromoPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("chapahustle-promo-shown");
    if (alreadyShown) return;

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const scrollPercent = (window.scrollY / scrollable) * 100;

      if (scrollPercent > 35) {
        setVisible(true);
        sessionStorage.setItem("chapahustle-promo-shown", "true");
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => {
    setVisible(false);
    setDismissed(true);
  };

  const requestDemoWhatsapp = () => {
    const phone = "254719200522"; // international format, no + or leading 0
    const message = encodeURIComponent(
      "Hi Linus, I'd like to see a demo of your Chapahustle e-commerce platform for my shop."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const requestDemoEmail = () => {
    window.location.href =
      "mailto:linusngetich78@gmail.com?subject=Demo request - Chapahustle platform&body=Hi Linus, I'd like to see a demo of your e-commerce platform for my shop.";
  };

  if (!visible || dismissed) return null;

  return (
    <div className="promo-popup">
      <button className="promo-close" onClick={close} aria-label="Close">×</button>
      <span className="promo-tag">Live product</span>
      <h4>Need an online store like this?</h4>
      <p>
        I co-built Chapahustle — a fully customizable e-commerce platform with
        order tracking and M-Pesa/card checkout. I build these for shops too.
      </p>
      <div className="promo-actions">
        <button className="promo-btn-primary" onClick={requestDemoWhatsapp}>
          Request demo on WhatsApp
        </button>
        <button className="promo-btn-secondary" onClick={requestDemoEmail}>
          Request via email instead
        </button>
        <a
          href="https://chapahustle.co.ke/"
          target="_blank"
          rel="noopener noreferrer"
          className="promo-link-live"
        >
          Or see it live →
        </a>
      </div>
    </div>
  );
}

export default PromoPopup;