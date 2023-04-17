import Tag_Container from "@/app/components/Tag_Container";
import { portfolioData } from "@/app/database/projects";
import Image from "next/image";
import { Typography } from "../../config/materialComponents"
import gitHubIcon from "../../../public/skills/githubIcon.svg"
import { shadows_font } from "@/app/fonts";

export function generateStaticParams() {
    return portfolioData.map((project) => ({
        id : project.id.toString()
    }));
}

const page = ({ params }) => {
    const project = portfolioData.find((p) => p.id === Number(params.id))

    const { icon, title, link, github, description, stack, purpose, screenshot } = project;

    return (
        <Tag_Container>
            <div className="flex flex-col-reverse lg:flex-row">
                <div className="relative container">
                    <Image
                        src={icon}
                        alt={`${title} logo`}
                        priority={true}
                        className="m-auto pb-8"
                        width={300}
                    />

                    <Image
                        src={screenshot}
                        alt={`${title} screenshot`}
                        priority={true}
                        className="rounded-lg shadow"
                    />
                </div>

                <div className="p-5">
                    <h1 className={`${shadows_font.className} text-5xl pb-3`}>
                    {title}
                    </h1>

                    <Typography className="pb-1">
                        <span className="font-bold">URL: </span>
                        <a href={link} className="underline">{link}</a>
                    </Typography>

                    <Typography className="pb-1">
                        <span className="font-bold">Tech Stack: </span>
                    </Typography>
                        <div className="flex flex-row gap-3">
                            {stack.map((data) => (
                                <Image
                                    key={data.toString()}
                                    src={data}
                                    alt="tech stack item"
                                    width={30}
                                />
                            ))}
                        </div>
                    
                    <Typography className="pb-1">
                        <span className="font-bold">Project Description: </span>
                        {description}
                    </Typography>

                    <Typography className="pb-1">
                        <span className="font-bold">Purpose: </span>
                        {purpose}
                    </Typography>

                    <Typography className="flex gap-3 pb-2">
                        <Image
                            src={gitHubIcon}
                            alt="GitHub Icon"
                            width={25}
                        />
                        <a href={github} className="underline">{github}</a>
                    </Typography>
                </div>
            </div>
        </Tag_Container>
        
    );
}

export default page;