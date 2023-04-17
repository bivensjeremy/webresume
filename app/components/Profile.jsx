import Image from 'next/image';
import profileImage1 from '../../public/jeremyProfile1.jpg'
import profileImage2 from '../../public/jeremyProfile2.jpg'
import profileImage3 from '../../public/jeremyProfile3.jpg'
import profileImage4 from '../../public/jeremyProfile4.jpg'
import Tag_Container from './Tag_Container';
import Tag_Header from './Tag_Header';
import { Typography, Card, CardBody, CardHeader, CardFooter, Tooltip } from '../config/materialComponents'

const profileImageGroup = [{
    id: 1,
    image: profileImage1,
    alt: 'casual pic'
},
{
    id: 2,
    image: profileImage2,
    alt: 'professional'
},
{
    id: 3,
    image: profileImage3,
    alt: 'with hat'
},
{
    id: 4,
    image: profileImage4,
    alt: 'black and white'
}]

const Profile = () => {
    return (
        <Tag_Container idTag="profile" className="flex flex-wrap">
            <div className='flex flex-col lg:flex-row'>
                <div className='flex align-middle m-auto text-center'>
                    <div>
                        <Tag_Header>
                            I&apos;m Jeremy
                        </Tag_Header>

                        <Typography variant='paragraph' className="px-3">
                            I am a passionate, web developer with skills in designing, building, and hosting full scale websites. I am seeking an opportunity to leverage my technical and creative skills to contribute to the success of a dynamic and innovative company. I can build anything from simple landing pages to complex e-commerce sites. I also focus on responsiveness, SEO optimization and end-user friendliness. Contact me today to discuss how I can be an asset to your team! 
                        </Typography>
                    </div>
                </div>

                <div className='relative flex flex-row lg:flex-col'>
                    {profileImageGroup.map(( {id, image, alt} ) => (
                        <div key={id} className="relative w-1/4 lg:w-80 h-96">
                            <Image
                                src={image}
                                alt={alt}
                                fill
                                sizes= "25vw"
                                className='p-1 m-auto object-contain'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Tag_Container>
    );
}

export default Profile;