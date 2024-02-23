
import React from 'react'



export default function Person({ path, name, designation, areaOfInterest, topic }) {
    console.log(path)
    return (
        <div className='faculty'>
            <div><img src={path} alt={name} className="suma" /></div>
            <div className='name_suma'>
                <label>
                    <h4>{name}</h4>
                </label>
                <label>
                    <h4> Designation:{designation}</h4>
                </label>
                <label>
                    <h4>Area of Interest: {areaOfInterest}</h4>
                </label>
                {topic && (
                    <label>
                        <h4>Topic: {topic}</h4>
                    </label>
                )}
            </div>
        </div>
    )
}




