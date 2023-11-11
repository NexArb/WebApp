import React from 'react'
import styles from './styles.module.css';

const About = () => {
    return (
        <>
            <div className={styles.aboutNexarbBox}>
                <div className={styles.aboutNexarbBoxContent}>
                    <h2 className={styles.aboutNexarbBoxContentHeader}>About Nexarb</h2>
                    <p>Advantages include excellent sound quality, and the fact that they do not require any batteries. Gamers often prefer wired headphones so they never have to worry about batteries dying in the middle of a heated match.</p>
                </div>
            </div>
            <div style={{padding: "2.5rem", marginTop: "10vh", display: "flex", justifyContent: "space-around"}} className="grid grid-cols-3 gap-3">
                <div className={styles.featureBoxContent}>
                    <div className={styles.featureBoxIcon}>
                        <svg width="61" height="52" viewBox="0 0 61 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.9286 9.14286V4.85714H39.0714V9.14286H21.9286ZM60.5 30.5714H38V35.9286C38 37.1004 37.029 38.0714 35.8571 38.0714H25.1429C23.971 38.0714 23 37.1004 23 35.9286V30.5714H0.5V46.6429C0.5 49.5893 2.91071 52 5.85714 52H55.1429C58.0893 52 60.5 49.5893 60.5 46.6429V30.5714ZM34.7857 30.5714H26.2143V34.8571H34.7857V30.5714ZM60.5 14.5C60.5 11.5536 58.0893 9.14286 55.1429 9.14286H43.3571V3.78571C43.3571 2.01116 41.9174 0.571424 40.1429 0.571424H20.8571C19.0826 0.571424 17.6429 2.01116 17.6429 3.78571V9.14286H5.85714C2.91071 9.14286 0.5 11.5536 0.5 14.5V27.3571H60.5V14.5Z" fill="url(#paint0_linear_149_5411)"/>
                            <defs>
                                <linearGradient id="paint0_linear_149_5411" x1="60.5475" y1="30.6928" x2="0.5" y2="30.6928" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#10E9A2"/>
                                    <stop offset="0.505208" stopColor="#429FD6"/>
                                    <stop offset="1" stopColor="#9749FB"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h4 className={styles.featureBoxContentHeader}>Many Useful Components</h4>
                    <p>Startup Framework contains components and complex blocks which can be easily be integrated into almost any design.</p>
                </div>
                <div className={styles.featureBoxContent}>
                    <div className={styles.featureBoxIcon}>
                        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.4916 27.7143C25.4916 26.5424 24.5206 25.5714 23.3488 25.5714H8.34877C7.1769 25.5714 6.20592 26.5424 6.20592 27.7143C6.20592 28.2835 6.44029 28.8192 6.84208 29.221L11.6635 34.0424L0.547433 45.1585C0.34654 45.3594 0.212612 45.6607 0.212612 45.9286C0.212612 46.1964 0.34654 46.4978 0.547433 46.6987L4.3644 50.5156C4.56529 50.7165 4.86663 50.8504 5.13449 50.8504C5.40234 50.8504 5.70368 50.7165 5.90458 50.5156L17.0206 39.3996L21.8421 44.221C22.2439 44.6228 22.7796 44.8571 23.3488 44.8571C24.5206 44.8571 25.4916 43.8862 25.4916 42.7143V27.7143ZM50.7707 5.21428C50.7707 4.94643 50.6367 4.64509 50.4358 4.44419L46.6189 0.627231C46.418 0.426337 46.1166 0.292409 45.8488 0.292409C45.5809 0.292409 45.2796 0.426337 45.0787 0.627231L33.9626 11.7433L29.1412 6.92187C28.7394 6.52009 28.2037 6.28571 27.6345 6.28571C26.4626 6.28571 25.4916 7.25669 25.4916 8.42857V23.4286C25.4916 24.6004 26.4626 25.5714 27.6345 25.5714H42.6345C43.8064 25.5714 44.7773 24.6004 44.7773 23.4286C44.7773 22.8594 44.543 22.3237 44.1412 21.9219L39.3198 17.1004L50.4358 5.98437C50.6367 5.78348 50.7707 5.48214 50.7707 5.21428Z" fill="url(#paint0_linear_149_5407)"/>
                            <defs>
                                <linearGradient id="paint0_linear_149_5407" x1="51.5411" y1="25.6928" x2="-0.5" y2="25.6928" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#10E9A2"/>
                                    <stop offset="0.505208" stopColor="#429FD6"/>
                                    <stop offset="1" stopColor="#9749FB"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h4 className={styles.featureBoxContentHeader}>Responsive Layout</h4>
                    <p>We haven`t forgotten about responsive layout. With Startup Framework, you can create a website with full mobile support.</p>
                </div>
                <div className={styles.featureBoxContent}>
                    <div className={styles.featureBoxIcon}>
                        <svg width="65" height="57" viewBox="0 0 65 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60.3613 33.7857C60.3613 34.3549 59.8591 34.8571 59.2899 34.8571H5.71847C5.14927 34.8571 4.64704 34.3549 4.64704 33.7857V5.92857C4.64704 5.35937 5.14927 4.85714 5.71847 4.85714H59.2899C59.8591 4.85714 60.3613 5.35937 60.3613 5.92857V33.7857ZM64.647 5.92857C64.647 2.98214 62.2363 0.571424 59.2899 0.571424H5.71847C2.77204 0.571424 0.361328 2.98214 0.361328 5.92857V42.3571C0.361328 45.3036 2.77204 47.7143 5.71847 47.7143H23.9328C23.9328 50.6272 21.7899 52.904 21.7899 54.1429C21.7899 55.3147 22.7609 56.2857 23.9328 56.2857H41.0756C42.2475 56.2857 43.2185 55.3147 43.2185 54.1429C43.2185 52.971 41.0756 50.5603 41.0756 47.7143H59.2899C62.2363 47.7143 64.647 45.3036 64.647 42.3571V5.92857Z" fill="url(#paint0_linear_149_5403)"/>
                            <defs>
                                <linearGradient id="paint0_linear_149_5403" x1="66.0514" y1="30.6928" x2="3.16953e-08" y2="30.6928" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#10E9A2"/>
                                    <stop offset="0.505208" stopColor="#429FD6"/>
                                    <stop offset="1" stopColor="#9749FB"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h4 className={styles.featureBoxContentHeader}>Retina Ready</h4>
                    <p>Startup Framework works on devices supporting Retina Display. Feel the clarity in each pixel.</p>
                </div>
            </div>
        </>
    )
}

export default About