'use client'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { jobhistory } from '../database/jobhistory';
import Tag_Container from './Tag_Container';
import Tag_Header from './Tag_Header';
import { Typography } from "../config/materialComponents"
import NavLink from './NavLink';

const OccupationEntry = ({ background, date, jobTitle, organization, description }) => {
    return (
        <VerticalTimelineElement
            className=""
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
        </VerticalTimelineElement>
    )
}

const WorkHistory = () => {
    return (
        <Tag_Container idTag="workhistory">
            <div className='text-center m-auto w-auto lg:w-full'>
                <Tag_Header>
                    Work History
                </Tag_Header>

            <div className="border-t-4 mt-3 border-[#bfdbfe] flex flex-col lg:flex-row">
                {jobhistory.map(( { date, jobTitle, organization, id } ) => (
                    <div key={id} className="w-80 pt-12 relative text-center px-1">
                        <div className='absolute h-12 border-[#bfdbfe] border-r-4 top-0 text-center right-1/2' />

                        <div className="bg-white rounded h-full py-5">
                            <Typography variant="h5">
                                {jobTitle}
                            </Typography>

                            <Typography variant="lead" className="italic">
                                {organization}
                            </Typography>

                            <Typography variant="small">
                                {date}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
            
            </div>
        </Tag_Container>
    );
}

export default WorkHistory;