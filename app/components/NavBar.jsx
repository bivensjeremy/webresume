import { shadows_font } from "../fonts";
import Footer from "./Footer";
import { navLinks } from "../database/navLinks";


const NavBar = () => {
    return (
        <div className="flex flex-col justify-center min-h-screen w-96 m-auto">
            <div className="flex flex-col justify-end fixed min-h-screen align-middle ">
                <Footer />
            </div>

            <div id="page-navigation" className="flex flex-col gap-2 fixed m-auto">
                {navLinks.map(({title, url, id}) => (
                    <a key={id} href={url} className={`${shadows_font.className} p-1 text-2xl`}>
                        {title}
                    </a>
                ))}
            </div>
            
        </div>
    );
}

export default NavBar;