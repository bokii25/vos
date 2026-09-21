import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import '../folder.css'

export const Windows = () => {

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
                            Window<span style={{ fontSize: '3rem', color: '#818CF8' }}>s</span>
                        </p>
                        <span className="wsubtit">
                            Nastanak i Istorijat Kompanije Microsoft
                        </span>
                    </div>

                    <div className="wsubtxt">
                        <p className="subtxt">
                            <br />
                            Kompaniju Microsoft osnovali su Bill Gates i Paul Allen 4. aprila 1975. godine. Njihova prvobitna vizija bila je smela i vizionarska za to vreme: "Računar na svakom stolu i u svakom domu". <br /><br />
                            Veliki proboj desio se početkom 1980-ih kada je Microsoft razvio MS-DOS
                            (Microsoft Disk Operating System) za IBM-ove personalne računare.
                            MS-DOS je bio baziran na tekstualnom interfejsu (kucanju komandi),
                            što je bilo komplikovano za prosečnog korisnika.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div className="wall" variants={windowsItemVariants}>
                <div className="whead">
                    <div className="wsubtxt">
                        <p className="subtxt">
                            <br />
                            Da bi računare učinio pristupačnijim svima,
                            Microsoft je 20. novembra 1985. godine izbacio
                            Windows 1.0 — grafičku nadogradnju
                            za MS-DOS koja je uvela rad sa prozorima, mišem i ikonama.
                            <br /><br />
                        </p>

                        <ul>
                            <li>
                                <strong>Windows 95 (1995):</strong> Revolucionarno izdanje koje je uvelo čuveno Start dugme, Taskbar (traku zadataka) i koncept Plug and Play.
                            </li><br />
                            <li>
                                <strong>Windows XP (2001):</strong> Smatra se jednim od najstabilnijih i najomiljenijih operativnih sistema u istoriji, zahvaljujući NT arhitekturi i prepoznatljivom plavo-zelenom dizajnu.
                            </li><br />
                            <li>
                                <strong>Windows 7 (2009):</strong> Ispravio je greške prethodnika (Windows Vista) i postao zlatni standard za brzinu, pouzdanost i korisnički interfejs.
                            </li><br />
                            <li>
                                <strong>Windows 10 (2015) & Windows 11 (2021):</strong> Prezakret ka modernim vizuelnim stilovima, boljoj bezbednosti, integraciji sa cloud servisima i podršci za rad na dodir (touchscreen).
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            <motion.div className="wall" variants={windowsItemVariants}>
                <div className="whead">
                    <p className="wsubtxt">
                        <br />
                        <strong>Široka Kompatibilnost:</strong> Podržava najobimniji ekosistem softvera, aplikacija i hardverskih komponenti na svetu.
                        <br /><br />
                        <strong>Dominacija u Gejmingu:</strong> Zahvaljujući tehnologijama poput DirectX-a i integraciji sa Xbox platformom, Windows je primarni izbor za gejmere.
                        <br /><br />
                        <strong>Multitasking i Produktivnost:</strong> Jednostavan rad sa više prozora istovremeno, podrška za više monitora i bogat izbor profesionalnih alata (poput Microsoft 365 paketa).
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};