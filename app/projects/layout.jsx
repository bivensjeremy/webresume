import { Navbar } from "../config/materialComponents"
import homeIcon from "../../public/homeIcon.svg"
import backIcon from "../../public/backIcon.svg"
import Image from "next/image"
import NavLink from "../components/NavLink"
import Footer from "../components/Footer"

export default function ProjectsLayout({ children }) {
    return (
        <main className="m-auto">
            <Navbar className="sticky inset-0 z-10 h-max max-w-full py-2 px-4 ">
                <div className="flex items-center justify-evenly">
                    <NavLink 
                        href="/#portfolio" 
                        variant="outlined"
                        className="flex items-center gap-1 text-black"
                    >
                        <Image
                            src={backIcon}
                            height={20}
                            alt="back icon"
                        /> Back
                    </NavLink>

                    <NavLink 
                        href="/#splash" 
                        variant="outlined"
                        className="flex items-center gap-1 text-black"
                    >
                        <Image
                            src={homeIcon}
                            height={20}
                            alt="home icon"
                        /> Home
                    </NavLink>
                </div>
            </Navbar>
            {children}
            <Footer />
        </main>
    )
}