import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat({
  phone = "5511999999999",
  message = "Olá! Gostaria de mais informações."
}) {
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      style={styles.button}
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    backgroundColor: "#25D366",
    color: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    zIndex: 1000,
    textDecoration: "none",
    transition: "transform 0.2s ease",
    animation: "pulse 2s infinite"
    }
};