import React from 'react'
import { FaCalendarDays, FaGithub } from 'react-icons/fa6'
import { BsTag } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ProjectCard = ({ className, projectImage, projectTitle, projectDate, projectDescription, projectTechnologies, githubLink, liveLink }) => {
    return (
        <>
            <div className={`w-full lg:w-[49%] bg-[#19151b] rounded-lg border border-gray-800 shadow shadow-gray-800 pb-20 relative ${className}`}>
                {/* Project Image */}
                <div className="w-full">
                    <img className='w-full h-[200px] lg:h-[250px] rounded-lg object-cover' src={projectImage} alt={projectTitle} />
                </div>
                
                {/* Project Content */}
                <div className="mt-3 px-3" >
                    {/* Project Title */}
                    <h6 className='text-2xl font-medium'>{projectTitle}</h6>
                    
                    {/* Project Date */}
                    <div className="flex justify-start items-center gap-x-3 mt-3">
                        <FaCalendarDays className='text-neutral-400' />
                        <p className='text-neutral-400'>{projectDate}</p>
                    </div>
                    
                    {/* Project Description */}
                    <p className='text-sm pt-3 text-neutral-400'>{projectDescription}</p>

                    {/* Technologies part Start  */}
                    <div className="flex justify-between items-center flex-wrap gap-2 pt-5">
                        {/* Technology Tags */}
                        {projectTechnologies?.map((tech, index) => (
                            <div key={index} className="w-auto flex justify-between items-center gap-x-1 border border-white text-white px-2 lg:px-5 py-2 rounded-xl">
                                <BsTag className='text-sm'/>
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                    {/* Technologies part End  */}
                </div>

                {/* Github and Live Link part - Fixed at bottom */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between w-full max-w-xl mx-auto py-3 px-3 ">
                    {/* GitHub Button  */}
                    <Link to={githubLink}>
                        <div className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg border border-gray-800 hover:bg-gray-900 transition hover:cursor-pointer">
                            <span><FaGithub /></span>
                            <span className="font-medium">Code</span>
                        </div>
                    </Link>

                    {/* Live Demo Button */}
                    <Link to={liveLink}>
                        <div className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg border border-gray-800 hover:bg-gray-900 transition hover:cursor-pointer">
                            <span><FiExternalLink /></span>
                            <span className="font-medium">Live</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProjectCard