import { X, Info, Monitor, Terminal, Laptop, BarChart2, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const MenuBar = ({ onClose }) => {
  const menuItems = [
    { title: "O Sajtu", icon: <Info size={18} />, color: "var(--folder-gray)", to: "/o-sajtu" },
    { title: "Windows", icon: <Monitor size={18} />, color: "var(--folder-purple)", to: "/Windows" },
    { title: "Linux", icon: <Terminal size={18} />, color: "var(--folder-lime)", to: "/Linux" },
    { title: "macOS", icon: <Laptop size={18} />, color: "var(--folder-pink)", to: "/Macos" },
    { title: "Statistika", icon: <BarChart2 size={18} />, color: "var(--person-color)", to: "/Statistika" },
    { title: "Šta je OS?", icon: <HelpCircle size={18} />, color: "var(--folder-green)", to: "/sta-je-os" },
  ];

  return (
    <motion.div 
    className="menubar" 
    onClick={(e) => e.stopPropagation()}
    >

      <div className="menu-header">
        <span className="menu-title">Podešavanja</span>
        <button className="menu-close-btn" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <div className="menu-items">
        {menuItems.map((item, index) => (
          <Link to={item.to} key={index} className="menu-link">
            <motion.button 
              className="menu-btn" 
              whileTap={{ scale: 0.4}}
              style={{ backgroundColor: item.color }}
            >
              <span className="menu-btn-icon">{item.icon}</span>
              <span className="menu-btn-text">{item.title}</span>
            </motion.button>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};