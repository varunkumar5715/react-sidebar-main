import { useState } from "react"

import './sidebar.css'

export default function SidebarItem({item}){
    const [open, setOpen] = useState(false)
    
    const handleItemClick = () => {
      setOpen(!open);
      console.log(item.path);
    };
    
    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>                 
                <div className="sidebar-title">      
                    <span>
                      
                        <a href={item.path}  className="sidebar-item plain" style={{ color: "white" }}>
                        {item.icon && <i className={item.icon}></i>}
                        {item.title}
                        </a>
                    </span>
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>                                                
                </div>
                <div className="sidebar-content" >
                    { 
                        item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) 
                    }
               </div>                
            </div>
        )             
    }else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                { item.icon && <i className={item.icon}></i> }
                {item.title}                
            </a>
        )
    }
}


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const SidebarItem = ({ item }) => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   const handleItemClick = (path) => {
//     setOpen(false); // Close the sidebar when an item is clicked
//     console.log("handle item click");
//     // navigate(path); // Navigate to the specified path
//   };

//   return (
//     <div className={`sidebar-item ${open ? "open" : ""}`}>
//       {item.childrens ? (
//         <div className="sidebar-title" onClick={handleClick}>
//           <span>
//             {item.icon && <i className={item.icon}></i>}
//             {item.title}
//           </span>
//           <i className="bi-chevron-down toggle-btn"></i>
          
//         </div>
//       ) : (
//         <Link
//           to={item.path} // Default path if no path is provided
//           className="sidebar-item plain"
//           onClick={() => handleItemClick(item.path)} // Handle click and navigate
//         >
//           {item.icon && <i className={item.icon}></i>}
//           {item.title}
//         </Link>
//       )}
//       {item.childrens && open && (
//         <div className="sidebar-content">
//           {item.childrens.map((child, index) => (
//             <SidebarItem key={index} item={child} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SidebarItem;


