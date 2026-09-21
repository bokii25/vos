import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import '../folder.css'


export const Linux = () => {

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
                            <span style={{ fontSize: '3rem', color: 'var(--folder-yellow)' }}>L</span>inux
                        </p>
                        <span className="wsubtit">
                            Priča o Slobodnom i Moćnom Operativnom Sistemu
                        </span>
                    </div>

                    <div className="wsubtxt linuxfold">
                        <p className="subtxt">
                            <br />
                              <strong>Za razliku</strong> od <strong>komercijalnih</strong>  sistema, Linux je nastao iz
                            entuzijazma jednog studenta. <strong>Finac Linus Torvalds je 1991. godine</strong>  na
                            Univerzitetu u Helsinkiju započeo rad na sopstvenom jezgru (kernelu) iz hobija, nezadovoljan
                            tadašnjim ograničenim sistemima.

                            <br /><br />

                            <strong>Linus</strong> je objavio izvorni kod besplatno na
                            internetu i pozvao programere širom
                            sveta da mu se pridruže. U kombinaciji sa <strong>GNU </strong>  
                            projektom (koji je pokrenuo Richard Stallman radi stvaranja
                            slobodnog softvera), rođen je kompletna, potpuno besplatna i
                            otvorena (open-source) alternativa dotadašnjim operativnim sistemima.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div className="wall" variants={windowsItemVariants}>
                <div className="whead">
                    <div className="wsubtxt linuxfold">
                        <p className="subtxt">
                            <br />
                           Pošto je sam <strong>Linux</strong>  zapravo samo jezgro (<strong>kernel</strong>), 
                           različite organizacije i zajednice 
                           spajaju to jezgro sa pratećim softverom i 
                           grafičkim okruženjima, stvarajući takozvane distribucije (<strong>distros</strong>).
                            <br /><br />
                        </p>

                        <ul>
                            <li>
                                <strong>Debian (1993):</strong> Jedna od najstarijih i najstabilnijih distribucija, temelja za mnoge današnje sisteme.
                            </li><br />
                            <li>
                                <strong>Ubuntu (2004):</strong> Revolucionarno izdanje koje je primaklo Linux običnim korisnicima zahvaljujući jednostavnoj instalaciji i modernom interfejsu.
                            </li><br />

                                <strong>Arch Linux / Manjaro:</strong> Omiljeni izbor naprednih korisnika koji žele potpunu kontrolu nad svakom komponentom sistema.
                            <li>
                                <strong>Red Hat / Fedora:</strong> Zlatni standard u poslovnom svetu i serverskim okruženjima.
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            <motion.div className="wall" variants={windowsItemVariants}>
                <div className="whead">
                    <p className="wsubtxt linuxfold">
                        <br />
                        <strong>Otvoreni Kod (Open-Source):</strong> Svako može besplatno preuzeti, izmeniti i prilagoditi kod sistema prema svojim potrebama.
                        <br /><br />
                        <strong>Nezaustavljiva Stabilnost i Bezbednost:</strong> Otporan na većinu računarskih virusa, zbog čega pokreće preko 90% svih internet servera i najbržih superračunara na svetu.
                        <br /><br />
                        <strong>Mala Potrošnja Resursa:</strong> Radi besprekorno čak i na veoma starim ili slabim računarima.

                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};