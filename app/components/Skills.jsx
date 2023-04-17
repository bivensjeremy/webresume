import { skillsGroup } from '../database/skills';
import Image from 'next/image'
import Tag_Container from './Tag_Container';
import Tag_Header from './Tag_Header';


const Skills = () => {
    return (
        <Tag_Container idTag='skills'>
            <div className='text-center m-auto'>
                <Tag_Header>
                    Skills
                </Tag_Header>

                <div className='flex flex-wrap gap-5 p-3'>
                    {skillsGroup.map(( {id, image, alt} ) => (
                        <div key={id} className='p-4 rounded-full border shadow m-auto bg-gray-100'>
                            <Image
                                src={image}
                                alt={alt}
                                className=''
                                width={76}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Tag_Container>
    );
}

export default Skills;