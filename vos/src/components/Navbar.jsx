import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export const Navbar = ({ navicon, onNavClick }) => {

    return(

        <nav className="navbar">

            <div className="settw" onClick={onNavClick}>
                {/* <Settings className="settingicon icon" size={25}/> */}
                {navicon}
            </div>

        </nav>
    )
}