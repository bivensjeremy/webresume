import Image from "next/image";
import ASURam from '../../public/goldenRam.png'
import Walden from '../../public/walden.png'
import Tag_Container from "./Tag_Container";
import Tag_Header from "./Tag_Header";
import {Typography, Card, CardBody, CardHeader} from "../config/materialComponents"


const EducationCard = ({ image, alt, school, major }) => {
    return (
        <Card className="w-72 h-72 mx-auto my-1">
            <CardHeader floated={false} shadow={false} className="h-full">
                <Image
                    src={image}
                    alt={school}
                    width={100}
                    className='m-auto'
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h3">
                    {school}
                </Typography>

                <Typography variant="paragraph">
                    {major}
                </Typography>
            </CardBody>
        </Card>
    )
}

const Education = () => {
    return (
        <Tag_Container idTag="education">
            <div className='m-auto text-center w-full'>
                <Tag_Header>
                    Education
                </Tag_Header>

                <div className='flex flex-col md:flex-row justify-evenly'>
                    <EducationCard
                        image={Walden}
                        school='Walden University'
                        major='Doctor of Public Administration'
                    />

                    <EducationCard
                        image={ASURam}
                        school='Albany State University'
                        major='Master of Public Administration'
                    />

                    <EducationCard
                        image={ASURam}
                        school='Albany State University'
                        major='Bachelor of Business Administration'
                    />
                    
                </div>
            </div>
        </Tag_Container>
    );
}

export default Education;