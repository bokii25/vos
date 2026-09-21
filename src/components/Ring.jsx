import { motion } from "framer-motion";

export const Ring = () => {

    const stats = {
        windows: 0.72, 
        macos: 0.15,   
        linux: 0.04    
    };

    
    return (
            <motion.div 
            className="ring-con"
            >
                <motion.div 
                className="ring-box"
                >

                <svg width='200' height='200' viewBox="0 0 200 200">

                    <circle cx='100' cy='100' r='80' strokeWidth='16' opacity={0.2} stroke="#3B82F6" fill="none" /> 

                    <motion.circle
                    cx='100' cy='100' r='80' 
                    strokeWidth='16' 
                    stroke="#3B82F6" 
                    fill="none"
                    style={{ rotate: -90, transformOrigin: 'center'}}
                    strokeLinecap='round'
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: stats.windows}}
                    transition={{ duration: 1.3}}
                    >

                    </motion.circle>

                    <circle cx='100' cy='100' r='60' strokeWidth='16' opacity={0.2} stroke="#FF007A" fill="none" /> 

                    <motion.circle
                    cx='100' cy='100' r='60' 
                    strokeWidth='16' 
                    stroke="#FF007A" 
                    fill="none"
                    style={{ rotate: -90, transformOrigin: 'center'}}
                    strokeLinecap='round'
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: stats.macos}}
                    transition={{ duration: 0.7, delay: 0.2}}

                    >

                    </motion.circle>

                    <circle cx='100' cy='100' r='40' strokeWidth='16' opacity={0.2} stroke="#FFD000" fill="none" /> 

                    <motion.circle
                    cx='100' cy='100' r='40' 
                    strokeWidth='16' 
                    stroke="#FFD000" 
                    fill="none"
                    style={{ rotate: -90, transformOrigin: 'center'}}
                    strokeLinecap='round'
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: stats.linux}}
                    transition={{ duration: 0.7, delay: 0.4}}

                    >

                    </motion.circle>

                    

                </svg>
                <div className="ringtxtw">
                    <ul>
                        <div className="ringelementw">
                            <div className="elementbox ewindows"></div>
                        <li>Windows: <span style={{ color: '#3B82F6'}}>{stats.windows * 100}</span> % </li>

                        </div>
                        <div className="ringelementw">
                            <div className="elementbox emacos"></div>
                        <li>macOS: <span style={{ color: '#FF007A'}}>{stats.macos * 100}</span> % </li>

                        </div>
                        <div className="ringelementw">
                            <div className="elementbox elinux"></div>
                        <li>Linux: <span style={{ color: '#FFD000'}}>{stats.linux * 100}</span> % </li>

                        </div>

                        {/* <li>macOS: {stats.macos * 100} % </li> */}

                        {/* <li>Linux: {stats.linux * 100} %  </li> */}

                    </ul>
                </div>
                    

                </motion.div>
            </motion.div>
    )
}