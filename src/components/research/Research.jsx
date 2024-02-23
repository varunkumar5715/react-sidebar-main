import React from 'react'
import ResearchData from '../../data/research.json'
import Publication from './Publication'

export default function Research() {  
    return (
    <div>
      <h4>
       
      <ul>
        {
         ResearchData[0].publications.map((data) => {
            return <Publication year = {data.year} data = {data.data} />            
          }) 
        }
      </ul>
      </h4>
    </div>
  )
}

