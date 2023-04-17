import Image from "next/image";
import { portfolioData } from "../database/projects";
import NavLink from "./NavLink";
import Tag_Header from "./Tag_Header";
import Tag_Container from "./Tag_Container";
import { Card, CardHeader, CardBody, Typography, Button } from "../config/materialComponents"

const Portfolio = () => {
    return (
        <Tag_Container idTag="portfolio">
            <div className="text-center">
                <Tag_Header>
                    Portfolio
                </Tag_Header>

                <div className='flex flex-wrap overflow-scroll h-5/6 mb-3 p-3'>
                        {portfolioData.reverse().map(( {id, icon, title, github} ) => (
                            <div key={id} className="w-1/2 lg:w-1/5">
                                <Card className="m-1 h-96">
                                <CardHeader floated={false} 
                                shadow={false} 
                                className="h-96 relative">
                                    <Image
                                        src={icon}
                                        alt="Portfolio App"
                                        fill
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                                        className='object-contain p-1 m-auto h-auto w-100 h-100'
                                    />
                                </CardHeader>
                                    <CardBody className="text-center">
                                        <Typography variant="lead" color="blue-gray" className="mb-2">
                                        {title}
                                        </Typography>
                                        <NavLink href={`/projects/${id}`}>
                                            Learn More
                                        </NavLink>
                                    </CardBody>
                                
                                </Card>
                            </div>
                        ))}
                </div>
            </div>
        </Tag_Container>
        
    );
}

export default Portfolio;