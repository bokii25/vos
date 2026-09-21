import { motion} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AppWindowIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const SubjectCard = ({ icon, to, desc, boxtitle, imgClass, boxbtnclass}) => {

    return(
        <div className="boxw">

            <div className={`box ${imgClass}`}>

                <div className="iconw">
                </div>

                <p className="boxtitle">
                    {boxtitle}
                </p>

                <div className="boxbtnw">

                    <Link to={to} style={{ textDecoration: 'none'}}>

                    <motion.button whileTap={{scale: 0.8}} className={`boxbtn ${boxbtnclass}`} >
                        Otvori <ArrowRight size={14}/>
                    </motion.button>

                    </Link>
                </div>

            </div>

            
        </div>
    )
}