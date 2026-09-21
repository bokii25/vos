import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import '../folder.css'


export const Macos = () => {

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
                            Mac<span style={{ fontSize: '3rem', color: 'var(--folder-pink)' }}>o</span>s
                        </p>
                        <span className="wsubtit">
                            Priča o Elegantnom i Zatvorenom Ekosistemu
                        </span>
                    </div>

                    <div className="wsubtxt macosfold">
                        <p className="subtxt">
                            <br />
                             Kompaniju Apple osnovali su <strong>Steve Jobs, Steve Wozniak i 
                             Ronald Wayne 1. aprila 1976. godine. </strong>  
                             Njihova vizija bila je stvaranje 
                             računara koji nisu samo moćni, 
                             već i estetski savršeni i jednostavni za korišćenje.

                            <br /><br />

                            Prekretnica se dogodila <strong>24. januara 1984. godine lansiranjem Macintosh-a (Mac)</strong>  — p
                            rvog masovno proizvedenog personalnog 
                            računara sa grafičkim interfejsom (GUI) i 
                            mišem koji je bio namenjen širokoj publici.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div className="wall" variants={windowsItemVariants}>
                <div className="whead">
                    <div className="wsubtxt macosfold">
                        <p className="subtxt">
                            <br />

                           Nakon što je Steve Jobs napustio Apple 1985. godine, 
                           osnovao je kompaniju NeXT i razvio operativni sistem 
                           NeXTSTEP. Kada se Jobs vratio u Apple 1997. godine, NeXTSTEP je 
                           postao osnova za potpuno novi operativni sistem — Mac OS X (lansiran 2001. godine).
                            <br /><br />
                        </p>

                        <ul>
                            <li>
                                <strong>Mac OS X (2001 / 2011):</strong> Prepoznatljiv po "Aqua" vizuelnom stilu sa providnim elementima, prozorima u obliku stakla i čuvenim Dock-om.
                            </li><br />
                            <li>
                                <strong>OS X & macOS Rebrendiranje (2012 /  2016):</strong> Prelazak na ravnoslojni (flat) dizajn i usklađivanje imena sa ostalim Apple sistemima (iOS, watchOS).
                            </li><br />

                            <li>
                                <strong>Apple Silicon Era (2020 / danas):</strong> Sa prelaskom sa Intel procesora na sopstvene M1, M2 i M3/M4 čipove, macOS dobija neviđenu brzinu, tihi rad bez zagrevanja i mogućnost pokretanja iOS aplikacija.
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            <motion.div className="wall" variants={windowsItemVariants}>
                <div className="whead">
                    <p className="wsubtxt macosfold">
                       <strong>Bešavna Integracija (Ekosistem):</strong> <br /> Funkcije poput Handoff-a, AirDrop-a i Universal Control-a omogućavaju trenutno deljenje fajlova i nastavak rada između iPhone-a, iPad-a i Mac-a.
                        <br /><br />
                        <strong>Unix Osnova:</strong> Baziran na Unix arhitekturi, macOS kombinuje vrhunsku stabilnost i komandne alate za developere sa jednostavnim grafičkim interfejsom
                        <br /><br />
                        <strong>Premium Dizajn i Optimizacija:</strong> Softver je skrojen isključivo za Apple-ov hardver, što pruža maksimalnu energetsku efikasnost i dugotrajnost baterije.

                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};