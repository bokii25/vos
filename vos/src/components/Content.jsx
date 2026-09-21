import { motion, scale } from "framer-motion";
import { Navbar } from "./Navbar";
import { CircleUserRound, ArrowRight, UserRound, ChartPie, ChartColumn, Settings, X, Info, Monitor, Terminal, Laptop, BarChart2, HelpCircle } from "lucide-react";
import { SubjectCard } from "./SubjectCards";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuBar } from "./MenuBar";

export const Content = ({}) => {

    const contentVariants = {
        closed: { opacity: 0 },
        opened: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                staggerChildren: 0.1

            }
        }

    }

    const itemVariants = {
        closed: {
            opacity: 0,
            scale: 0.8
        },

        opened: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 250,
            }
        }
    }

    const [isClicked, setIsClicked] = useState(false)
    return (
            

            



        <motion.div
            className="site-con"
            variants={contentVariants}
            initial='closed'
            animate='opened'
            style={{ transformOrigin: 'center center' }}
        >


            <motion.div
                className="navwrapper"
                initial={false}
                animate={{
                    opacity: isClicked ? 1 : 0,
                    pointerEvents: isClicked ? "auto" : "none"
                }}
                onClick={() => setIsClicked(!isClicked)}
            >

                <motion.div 
                initial={false}
                animate={{
                    scale: isClicked ? 1 : 0,
                    opacity: isClicked ? 1 : 0,
                    transition: { type: 'spring', stiffness: 200, damping: 15}
                }}
                >
                <MenuBar 
                onClose={() => setIsClicked(false)}
                />

                </motion.div>



            </motion.div>

     


            <Navbar
                navicon={<Settings className="settingicon icon" size={25} />}
                onNavClick={() => setIsClicked(!isClicked)}
            />



            <div className="all">

                <div className="head">
                    <motion.p variants={itemVariants} className="title">
                        Sve o operativnim sistemima.
                    </motion.p>
                    <motion.div variants={itemVariants} className="labelw">
                        <div className="labelbox">
                            <p style={{ fontWeight: '800', fontFamily: 'Inter, sans-serif', fontSize: '1.4rem' }} className="hashtag">
                                #
                            </p>
                            <p className="labeltxt">
                                Istrazi sve o modernim OS-evima
                            </p>
                        </div>

                        
                    </motion.div>

                </div>

                <div className="ossection">

                    <motion.p variants={itemVariants} className="subtit">
                        Kolekcija
                    </motion.p>


                    <motion.div
                        className="boxw"
                        variants={itemVariants}
                    >

                        <SubjectCard
                            boxtitle='Windows'
                            imgClass='windows'
                            boxbtnclass='btnwindows'
                            to={'/Windows'}
                        />

                        <SubjectCard
                            boxtitle='Linux'
                            imgClass='linux'
                            boxbtnclass='btnlinux'
                            to={'/Linux'}

                        />

                        <SubjectCard
                            boxtitle='macOS'
                            imgClass='macos'
                            boxbtnclass='btnmacos'
                            to={'/macos'}
                        />

                        <SubjectCard
                            boxtitle='Sta je OS?'
                            imgClass='sos'
                            boxbtnclass='btnos'
                            to={'/sta-je-os'}
                        />

                    </motion.div>



                </div>

            </div>

            <motion.footer variants={itemVariants} className="footer-box">
                <p className="footerhash">
                    #
                </p>
                <p className="footer-text">&copy; 2026 Vrste OS. Sva prava zadrzana.</p>
            </motion.footer>
        </motion.div>
    )
}
