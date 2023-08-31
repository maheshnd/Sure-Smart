"use client";
import { styled, keyframes } from "styled-components";
const Container = styled.div`
  position: fixed !important;
  left: 10px !important;
  bottom: 50px !important;
  z-index: 1000 !important;
`;

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
    color: #28a745;
  }
  50% {
    transform: translateY(-15px);
    color: #339933;
  }
`;

const WhatsAppIcon = styled.a`
  animation: ${bounceAnimation} 1s infinite !important;
  cursor: pointer !important;
  display: inline-block !important; /* Ensure the link takes up space */
`;

const Icon = styled.i`
  font-size: 4rem !important;
`;
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
    <Container>
      <WhatsAppIcon onClick={handleWhatsAppClick}>
        <Icon className="fab fa-whatsapp"></Icon>
      </WhatsAppIcon>
    </Container>
  );
};
