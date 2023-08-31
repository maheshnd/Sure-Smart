"use client";
export const WhatsAppChat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "7350837127";
    const message = encodeURIComponent(
      "Hi, I would like to have a call for counseling."
    );
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <div className="whatapp-Container">
      <a className="whatsapp-icon-link" onClick={handleWhatsAppClick}>
        <i className="fab fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
};
