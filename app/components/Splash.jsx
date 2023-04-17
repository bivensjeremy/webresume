import Image from "next/image";
import { sedwick_font, shadows_font } from "../fonts";
import NavLink from "./NavLink";
import Tag_Container from "./Tag_Container";
import profileImage from "../../public/jeremyProfile5.jpg"
import { Typography } from "../config/materialComponents"


const jobLink = "mailto:admin@bivensblueprint.com"
const websiteLink = "https://www.honeybook.com/widget/bivens_blueprint_llc_191523/cf_id/612fa0a4ceb19b0e829a228d"

const Splash = () => {
    return (
        <Tag_Container idTag="splash">
            <div className="w-full flex flex-col lg:flex-row">
                <div className="w-full flex flex-col m-auto">
                    <h1 className={`${sedwick_font.className} uppercase text-5xl text-center`}>
                        Jeremy Bivens
                    </h1>
                    <h1 className={`${shadows_font.className} text-5xl text-center`}>
                        Web Resume & Portfolio
                    </h1>
                    
                    <div className="flex gap-3 text-center m-auto py-5">
                        <div>
                            <NavLink href={jobLink}>
                                Contact Me
                            </NavLink>
                            <Typography variant="small" className="italic">For Employment</Typography>
                        </div>
                        
                        <div>
                            <NavLink href={websiteLink} variant="outlined">
                                Contact Me
                            </NavLink>
                            <Typography variant="small" className="italic">You Need a Website</Typography>
                        </div>
                    </div>
</div>
                    <div className="w-full m-auto">
                        <div className="relative overflow-hidden rounded-full m-auto w-96 h-96">
                            <Image
                                src={profileImage}
                                alt="Header Image"
                                priority
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="m-auto object-cover"
                            />
                        </div>
                    </div>

            </div>
        </Tag_Container>
    );
}

export default Splash;