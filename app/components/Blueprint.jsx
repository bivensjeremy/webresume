import Image from "next/image";
import BPBanner from "../../public/BlueprintBanner.png"
import BPLogo from "../../public/projects/Blueprint Logos border.png"
import NavLink from "./NavLink";
import Tag_Container from "./Tag_Container";
import Tag_Header from "./Tag_Header";
import {Typography} from "../config/materialComponents"

const Blueprint = () => {
    return (
        <Tag_Container idTag="bivensblueprint">
            <div className='m-auto text-center'>
                <div className="relative text-center">
                    <Tag_Header>
                        <Image
                            src={BPLogo}
                            alt="Blueprint Logo"
                            width={100}
                            className="mx-auto my-3"
                        />

                        <Image
                            src={BPBanner}
                            alt="Blueprint Banner"
                            className="h-100 w-100 m-auto"
                        />
                    </Tag_Header>

                    <NavLink href="https://bivensblueprint.com" className="m-3">
                        Get In Touch
                    </NavLink>

                    <Typography variant="paragraph" className="text-justify">
                        Bivens Blueprint, LLC. is my business. I provide professional and creative web development services to create your online presence to reflect your brand and values. Whether you need a simple landing page or a full-fledged e-commerce website, I have the skills meet your needs and budget. I work with you from start to finish, planning and design and beyond, to ensure your website is functional, attractive, and optimized to reach your maximum audience. Contact me today to get started turning your vision into a reality!
                    </Typography>
                </div>
            </div>
        </Tag_Container>
    );
}

export default Blueprint;