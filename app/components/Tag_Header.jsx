import { shadows_font } from "../fonts";

const Tag_Header = ({ children }) => {
    return (
        <h2 className={`${shadows_font.className} text-5xl py-3`}>
            {children}
        </h2>
    );
}

export default Tag_Header;