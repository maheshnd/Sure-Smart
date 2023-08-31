"use client";
import { styled, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Container = styled.div`
  position: fixed;
  left: 10px;
  bottom: 50px;
  z-index: 1000;
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
  animation: ${bounceAnimation} 1s infinite;
  cursor: pointer;
  display: inline-block; /* Ensure the link takes up space */
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
        <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "4rem" }} />
      </WhatsAppIcon>
    </Container>
  );
};
