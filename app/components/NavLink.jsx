import Link from "next/link";
import { Button } from "../config/materialComponents"

const NavLink = ({ href, children, variant, className }) => {
    return (
        <Link href={href}>
            <Button variant={variant} className={className}>
                {children}
            </Button>
        </Link>
    );
}

export default NavLink;