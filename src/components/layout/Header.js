// import React from 'react';
// import './Header.css'; // Import your CSS file for styling

// function Header(props) {
//   return (
//     <header className="header">
//       <h1>Header</h1>
//     </header>
//   );
// }

// export default Header;


import {useContext} from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import './Header.css'; // Import your CSS file for styling
import SidebarData from '../../data/sidebar.json'
import PositionContext from '../../store/RouteContextProvider';


function Header() {
  const {current} = useContext(PositionContext)
  const location = useLocation(); // Get the current URL location
  const pathSegments = location.pathname.split('/'); // Split the URL path into segments
  //const labName = pathSegments.length > 1 ? pathSegments[1] : 'Home'; // Extract the lab name from the URL
  const labName = SidebarData[current-1].title


  return (
    <header className="header">
      <h1>{labName}</h1> {/* Display the lab name in the header */}
    </header>
  );
}

export default Header;
