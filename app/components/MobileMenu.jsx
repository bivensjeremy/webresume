'use client'
import Image from "next/image";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "../config/materialComponents"
import menuIcon from "../../public/menuIcon.svg"
import { navLinks } from "../database/navLinks";

const MobileMenu = () => {
    return (
        <Menu>
            <MenuHandler>
                <div className='p-3 rounded-full border shadow m-auto bg-[#bfdbfe]'>
                    <Image
                        src={menuIcon}
                        alt="menu icon"
                        width={24}
                    />
                </div>
            </MenuHandler>
            <MenuList>
                {navLinks.map(({title, url, id}) => (
                    <a key={id} href={url}>
                        <MenuItem>{title}</MenuItem>
                    </a>
                ))}
            </MenuList>
        </Menu>
    );
}

export default MobileMenu;