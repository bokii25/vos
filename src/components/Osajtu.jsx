import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import '../folder.css'


export const OSajtu = () => {

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
                            <span style={{ fontSize: '3rem', color: 'var(--folder-gray)' }}>O</span> Auturu Sajta
                        </p> <br />
                        <span className="wsubtit">
                         Sajt radjen <strong>BEZ</strong> AI alata!
                        </span>
                    </div>

                    

                    <div className="wsubtxt osajtufold">
                        <p className="subtxt">
                            <br />
                              Mnogi od vas (korisnika) ce pomisliti da je celokupan sajt
                            radjen preko AI-ja, kao sto je Claude, Gemini, ChatGPT, i ostali..
                            <br /><br />

                            Napominjem jos jednom, ovaj sajt je isklucivo odradjen od strane mene <strong>BEZ AI tool-ova</strong>.
                            <strong> AI je isklucivo koriscen za sugestije dizajna i predloge kontenta.</strong>

                            <br /><br />
                            <strong>Pa kako je onda dete napravilo ovaj sajt?</strong> Ako je dete napravilo neki sajt znaci da ga je AI napravio? Da, ali <strong>ne</strong> uvek. 
                            Veztbao sam i ucio sve stvari koje mozete da vidite na sajtu. <br /><br /> <strong>Od ucenja div strukture u HTML-u, do ucenja pozicioniranja u CSS-u sa display-flex, positon: relative / absolute, display-grid..itd  
                            Prelazenja na JavaScript i ucenja funcionalnosti, metode sa nizovima, formiranja varijabli i funkcija, objekata i sl. 
                            I nakraju sve je vodilo na ucenju React-a, framework biblioteke JavaScript-a u kome je i uradjen ovaj sajt uz Framer Motion za animacije.
                            </strong>

                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div className="wall" variants={windowsItemVariants}>
                <div className="whead">
                    <div className="wsubtxt osajtufold">
                        <p className="subtxt">
                            
                            <span><strong>Moj Put do Ovog Sajta</strong> <br /></span>
                            <br />
                            Kao sto sam malopre napomenuo prvo sam krenuo sa osnovama, HTML, CSS, i u medjuvremenu JavaScript-om (Kasnije ReactJs).
                            <strong> Kad?</strong> Sto se tice vremena kada sam poceo svu ovu zbrku sa kodiranjem,
                            bilo je na pocetku 7. razreda sto se nastavlja sad u 2. (moje) srednje skole (S. 2026.), ali naravno nastavljam sa ucenjem i daljem usavrsavanju svojih sposobnosti.
                            A za one koji misle da je ovo previse tesko za dete da razme ili napravi ili nauci, gresi.
                            <br /><br />
                            <strong>Nije nemoguce nauciti i vezbati.</strong>
                            
                           
                        </p>

                      
                    </div>
                </div>
            </motion.div>

            <motion.div className="wall" variants={windowsItemVariants}>
                <div className="whead">
                    <p className="wsubtxt osajtufold">
                       Naravno razlika od mojih prvih pocetaka i sajtova u pokusaju je ogromna. 
                       Bilo je nenormalno padova i pauza od kodiranja, nenormalno malo strpljenja 
                       kada nesto ne bi proradilo iz 100. pokusaja.
                       <br /><br /> 
                       <strong>Ali, naravno</strong> tu su i prelepi uspeli pokusaji zapocetog i novi utisak
                       o svom znanju svakog puta kada naucis nesto novo.

                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};