import Image from 'next/image';

const AppBar = () => {
  return (
    <nav>
        <div className="flex justify-evenly items-center p-0">
            <div className="mt-3 mr-0.5">
                <Image
                    src={"/img/nexarb_logo.png"}
                    width={170}
                    height={38}
                    alt='Nexarb Logo'
                />
            </div>
            <div className="mt-5">
                <a className="p-6" href="#">About Us</a>
                <a className="p-6" href="#">Our Team</a>
                <a className="p-6" href="#">Contact</a>
                <button>
                    <div className="rounded-full p-px bg-gradient-to-br from-[#9749FB] via-[#429FD6] to-[#10E9A2] mx-2">
                        <div className="bg-about-page-gradient rounded-full py-1 px-4 text-center">
                            <a href="#">SOLANA</a>
                        </div>
                    </div>
                </button>
                <button>
                    <div className="rounded-full p-px bg-gradient-to-br from-[#9749FB] via-[#429FD6] to-[#10E9A2] mx-2">
                        <div className="bg-about-page-gradient rounded-full py-1 px-4 text-center">
                            <a href="#">NEAR</a>
                        </div>
                    </div>
                </button>
                <button className="bg-blue-500 text-white py-1 px-5 rounded-full mx-2"><a href="#">Join Us</a></button>
            </div>
        </div>
    </nav>
  )
}

export default AppBar