import { useState, useEffect } from "react";
import "./PromoPopup.css";

const DEMO_URL = "https://sigzgeneralcontractors-seven.vercel.app/";

function PromoPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("cms-site-promo-shown");
    if (alreadyShown) return;

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const scrollPercent = (window.scrollY / scrollable) * 100;

      if (scrollPercent > 35) {
        setVisible(true);
        sessionStorage.setItem("cms-site-promo-shown", "true");
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
      "Hi Linus, I'd like a business website for my company that I can edit myself without coding."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const requestDemoEmail = () => {
    window.location.href =
      "mailto:linusngetich78@gmail.com?subject=Business website with CMS - enquiry&body=Hi Linus, I'd like a business website for my company that I can edit myself without coding.";
  };

  if (!visible || dismissed) return null;

  return (
    <div className="promo-popup">
      <button className="promo-close" onClick={close} aria-label="Close">×</button>
      <span className="promo-tag">Live demo</span>
      <h4>A website you can edit yourself</h4>
      <p>
        I built a business website for a Sigz Contractors co-founder that the
        owner manages alone: edit, update or delete content and adjust the
        styling, with no code needed. I can build one for your business too.
      </p>
      <div className="promo-actions">
        <button className="promo-btn-primary" onClick={requestDemoWhatsapp}>
          Get yours on WhatsApp
        </button>
        <button className="promo-btn-secondary" onClick={requestDemoEmail}>
          Request via email instead
        </button>
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="promo-link-live"
        >
          Or see the sample site →
        </a>
      </div>
    </div>
  );
}

export default PromoPopup;