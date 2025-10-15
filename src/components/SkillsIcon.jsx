import React from 'react'

const SkillsIcon = ({ className, SkillsLogo, logoName }) => {
    return (
        <>
            <div className={`w-[48%] lg:w-[23%] bg-[#19151b] rounded shadow shadow-gray-800  ${className}`}>
                <div className="px-6 pt-3">
                    <img className={`w-[55px]  rounded-full`} src={SkillsLogo} alt="" />
                </div>
                <p className='text-sm text-center pt-1 pb-3'>{logoName}</p>
            </div>
        </>
    )
}

export default SkillsIcon