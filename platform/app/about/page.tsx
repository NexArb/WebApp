import React from 'react'
import Image from 'next/image';
import AppBar from '@/platform/components/CustomNavbar';

const About = () => {
    return (
        <div className="bg-about-page-gradient min-h-screen">
            <AppBar/>
            <div className="flex justify-center mt-24">
                <div className="w-full md:w-1/3 h-36 text-center">
                    <h2 className="text-4xl font-bold mb-5">About Nexarb</h2>
                    <p>Advantages include excellent sound quality, and the fact that they do not require any batteries. Gamers often prefer wired headphones so they never have to worry about batteries dying in the middle of a heated match.</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-32 p-10 md:p-5 sm:p-3 place-items-center justify-around">
                <div className="w-full md:w-64 h-72 text-center justify-center">
                    <div className="flex justify-center mb-5">
                        <Image
                            src="/img/fa-briefcase.png"
                            width={60}
                            height={60}
                            alt='Briefcase'
                        />
                    </div>
                    <h4 className="text-2xl mb-5">Many Useful Components</h4>
                    <p>Startup Framework contains components and complex blocks which can be easily be integrated into almost any design.</p>
                </div>
                <div className="w-full md:w-64 h-72 text-center justify-center">
                    <div className="flex justify-center mb-5">
                        <Image
                            src="/img/fa-compress.png"
                            width={52}
                            height={60}
                            alt='Compress'
                        />
                    </div>
                    <h4 className="text-2xl mb-5">Responsive <br/> Layout</h4>
                    <p>We haven`t forgotten about responsive layout. With Startup Framework, you can create a website with full mobile support.</p>
                </div>
                <div className="w-full md:w-64 h-72 text-center justify-center">
                    <div className="flex justify-center mb-5">
                        <Image
                            src="/img/fa-desktop.png"
                            width={65}
                            height={60}
                            alt='Desktop'
                        />
                    </div>
                    <h4 className="text-2xl mb-5">Retina <br/> Ready</h4>
                    <p>Startup Framework works on devices supporting Retina Display. Feel the clarity in each pixel.</p>
                </div>
            </div>
        </div>
    )
}

export default About