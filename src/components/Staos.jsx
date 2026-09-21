import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import '../folder.css'


export const Staos = () => {


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

            <motion.div className="wall" variants={windowsItemVariants}>
                <div className="whead">
                    <div className="txtwra">
                        <p className="wtitle">
                            Šta je Operativni Sistem O<span style={{ fontSize: '3rem', color: 'var(--folder-green)' }}>S</span>
                        </p>
                        <span className="wsubtit">
                            Sama Srz
                        </span>
                    </div>

                    <div className="wsubtxt stjosfold">
                        <p className="subtxt">
                            <br />
                             <strong>Operativni Sistem</strong> (OS) je sistemski softver koji deluje kao posrednik i prevodilac između korisnika, aplikacija i fizičkog hardvera računara.

                            <br /><br />

                          Zamisli operativni sistem kao dirigenta u orkestru ili 
                          menadžera u fabrici: <strong>bez njega</strong> , hardverske komponente (procesor, <strong>RAM</strong>  memorija, grafička kartica, hard disk) bile bi samo skup beskorisnih elektronskih 
                          kola koje komponente i aplikacije ne bi znale kako da koriste.

                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div className="wall" variants={windowsItemVariants}>
                <div className="whead">
                    <div className="wsubtxt stjosfold">
                        <p className="subtxt">
                            <br />

                           Operativni sistem neumorno izvršava stotine zadataka u pozadini 
                           kako bi računarski sistem funkcionisao stabilno i fluidno:
                            <br /><br />
                        </p>

                        <ul>
                            <li>
                                <strong>Upravljanje Procesorom (CPU Management):</strong> Određuje koje aplikacije dobijaju procesorsko vreme i kojim redosledom (multitasking)
                            </li><br />

                            <li>
                                <strong>Upravljanje Memorijom (RAM Management):</strong> Dodeljuje radnu memoriju programima kojima je potrebna i oslobađa je kada se programi zatvore.
                            </li><br />

                            

                            <li>
                                <strong>Korisnički Interfejs (UI):</strong> Omogućava ljudima grafičku komunikaciju sa računarom preko ikona, prozora i miša (GUI) ili preko tekstualnih komandi (CLI).
                            </li>

                            <li>
                                <strong>Upravljanje Uređajima (Device Drivers):</strong> Komunicira sa periferijama poput tastature, miša, štampača i monitora.
                            </li>

                            
                        </ul>
                    </div>
                </div>
            </motion.div>

                    </motion.div>
    );
};