import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "919924574894";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 group overflow-hidden"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title="Chat with us on WhatsApp"
    >
      {/* Background ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white opacity-0 rounded-full"
        whileHover={{ opacity: 0.2, scale: 1.5 }}
        transition={{ duration: 0.4 }}
      />
      
      {/* WhatsApp Icon SVG */}
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 text-white fill-current relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.301-.15-1.767-.872-2.04-.971-.272-.099-.47-.15-.669.15-.199.301-.769 1.111-.94 1.309-.172.199-.344.223-.646.072-.302-.15-1.273-.47-2.426-1.503-.896-.8-1.5-1.788-1.674-2.1-.174-.312-.019-.481.132-.63.136-.134.301-.35.452-.524.151-.174.202-.298.303-.497.101-.198.05-.371-.026-.523-.076-.153-.669-1.611-.916-2.213-.242-.589-.487-.51-.669-.519-.172-.01-.371-.012-.57-.012-.198 0-.521.074-.795.372-.273.298-1.043 1.02-1.043 2.488 0 1.468 1.069 2.89 1.218 3.088.149.198 2.095 3.2 5.076 4.487.708.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.418.249-.696.249-1.295.174-1.418-.074-.123-.272-.196-.574-.346zm-5.448 7.412h-.001C10.12 21.795 8.25 21.282 6.64 20.315l-.382-.228-3.821.503.513-3.722-.25-.397a9.743 9.743 0 01-1.493-5.215c0-5.392 4.388-9.779 9.782-9.779 2.612 0 5.068 1.017 6.913 2.863a9.721 9.721 0 012.867 6.917c0 5.394-4.389 9.782-9.784 9.782zm8.471-18.252A11.71 11.71 0 0012.023 0C5.418 0 .041 5.38.038 11.99a11.968 11.968 0 001.604 6.002L0 24l6.15-1.612a11.93 11.93 0 005.87 1.583h.005c6.604 0 11.982-5.38 11.985-11.99a11.91 11.91 0 00-3.539-8.47z" />
      </svg>

      {/* Tooltip text for accessibility (visually hidden, but present for SR) */}
      <span className="sr-only">Contact us on WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;
