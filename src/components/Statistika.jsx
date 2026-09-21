import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Ring } from "./Ring";
import '../folder.css'


export const Statistika = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const windowsVariants = {
        closed: { opacity: 0 },
        opened: {
            opacity: 1,
            transition: {
                duration: 0.4,
                staggerChildren: 0.15
            }
        }
    };

    const windowsItemVariants = {
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
                // damping: 10
            }
        }
    };

    return (
        <motion.div
            className="wsite-con"
            variants={windowsVariants}
            initial='closed'
            animate='opened'
        >
            <Navbar
                navicon={
                    <Link style={{ textDecoration: 'none', color: '#000000', display: 'flex' }} to='/'>
                        <ArrowLeft className="settingicon icon" size={25} />
                    </Link>
                }
            />

            <motion.div className="wall statw" variants={windowsItemVariants}>
                <div className="statw" style={{ fontFamily: 'var(--inter-font)' }}>
                    <div className="txtwra">
                        <p className="wtitle">
                            Statis<span style={{ fontSize: '3rem', color: '#ef435d' }}>t</span>ika
                        </p>
                        <span className="wsubtit">
                            Globalna Statisticka Koriscenja <br /> Racunara
                        </span>
                    </div>
                    <Ring />


                    <motion.div className="wall" variants={windowsItemVariants}>
                        <div className="whead">
                            <p className="wsubtxt statfold">

                                <strong>Udeo i distribucija korisničkih platformi</strong> <br /> <br />

                                Analiza poseta pokazuje dominantno
                                prisustvo Windows operativnog
                                sistema kao primarne radne stanice
                                većine korisnika. macOS beleži stabilan
                                udeo među korisnicima usmerenim na dizajn i razvoj,
                                dok Linux održava konstantan segment naprednih
                                korisnika i sistemskih administratora.

                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>




        </motion.div>
    );
};