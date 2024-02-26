// import React from 'react';
// import Layout from '../components/layout/Layout';

// import peopleData from '../data/people.json';
// import Person from '../components/people/Person';


// export default function People() {
//   const { advisors, externalAdvisors, researchScholars, students, alumni } = peopleData[0].people;

//   return (
//     <div>
//       <Layout>
//         <div>
//           <h1>People</h1>
//           <div>
//             <h2>Advisor</h2>
//             <div>
//               {
//                 advisors.map((advisor, index) => {                
//                   return <Person key={index} path={advisor.path} name={advisor.name} designation={advisor.designation} areaOfInterest={advisor.areaOfInterest} />            
//                 })
//               }
//             </div>
//           </div>
//           <div>
//             <h2>External Advisors</h2>
//             <div>
//               {
//                 externalAdvisors.map((advisor, index) => {                
//                   return <Person key={index} path={advisor.path} name={advisor.name} designation={advisor.designation} areaOfInterest={advisor.areaOfInterest} />            
//                 })
//               }
//             </div>
//           </div>
//           <div>
//             <h2>Research Scholars</h2>
//             <div>
//               {
//                 researchScholars.map((advisor, index) => {                
//                   return <Person key={index} path={advisor.path} name={advisor.name} topic={advisor.topic} areaOfInterest={advisor.areaOfInterest} />            
//                 })
//               }
//             </div>
//           </div>


//         </div>



//       </Layout>
//     </div>
//   );
// }




import React, { useContext } from 'react';
import Layout from '../components/layout/Layout';
import peopleData from '../data/people.json';
import Person from '../components/people/Person';
import PositionContext from '../store/RouteContextProvider';

export default function People() {
  const {current} = useContext(PositionContext)
  const { advisors, externalAdvisors, researchScholars, students, alumni } = peopleData[current-1];

  return (
    <div>
      <Layout>
        <div>
          {/* <h1>People</h1> */}
          <div>
            <h2>Advisor</h2>
            <div>
              {advisors.map((advisor, index) => (                
                <Person key={index} path={advisor.path} name={advisor.name} designation={advisor.designation} areaOfInterest={advisor.areaOfInterest} />            
              ))}
            </div>
          </div>
          <div>
            <h2>External Advisors</h2>
            <div>
              {externalAdvisors.map((advisor, index) => (                
                <Person key={index} path={advisor.path} name={advisor.name} designation={advisor.designation} areaOfInterest={advisor.areaOfInterest} />            
              ))}
            </div>
          </div>
          <div>
            <h2>Research Scholars</h2>
            <div>
              {researchScholars.map((scholar, index) => (                
                <Person key={index} path={scholar.path} name={scholar.name} areaOfInterest={scholar.areaOfInterest} topic={scholar.topic} />            
              ))}
            </div>
          </div>
          <div>
            <h2>Students</h2>
            <div>
              {students.map((student, index) => (
                <p key={index}>{student}</p>
              ))}
            </div>
          </div>
          <div>
            <h2>Alumni</h2>
            <div>
              {alumni.map((alumnus, index) => (
                <p key={index}>{alumnus}</p>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

