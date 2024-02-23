// import { useState, useContext } from "react"
// import PositionContext from "../../store/RouteContextProvider";
// import './sidebar.css'


// export default function SidebarItem({ item }) {
//     const [open, setOpen] = useState(false)

//     const {updateCurrentPage, current} = useContext(PositionContext)
    
//     const setPageNo = (position) => {
//         alert(position);
//         updateCurrentPage(position);
//     }
//     const handleClick = () =>{
//         setPageNo(item.position)
//     }
   

//     if (item.childrens) {
//         return (
//             <div className={open ? "sidebar-item open" : "sidebar-item"}>
//                 <div className="sidebar-title">
//                     <span>
//                         <a href={item.path} className="sidebar-item plain" style={{ color: "white" }}  onClick={handleClick}>
//                             {item.icon && <i className={item.icon}></i>}
//                             {item.title} {current}
//                         </a>
//                     </span>
//                     <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
//                 </div>
//                 <div className="sidebar-content" >
//                     {
//                         item.childrens.map((child, index) => <SidebarItem key={index} item={child} />)
//                     }
//                 </div>
//             </div>
//         )
//     } 
//     else {
//         return (
//             <a href={item.path || "#"} className="sidebar-item plain">
//                 {item.icon && <i className={item.icon}></i>}
//                 {item.title}
//             </a>
//         )
//     }
// }


import { useState, useContext } from "react";
import PositionContext from "../../store/RouteContextProvider";
import './sidebar.css';

export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false);
    const { updateCurrentPage, current } = useContext(PositionContext);

    const setPageNo = (position) => {
        updateCurrentPage(position);
    };

    const handleClick = (event) => {
        event.preventDefault(); // Prevent default behavior of anchor tag
        setPageNo(item.position);
    };

    return (
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
            <div className="sidebar-title">
                <span>
                    <a href={item.path} className="sidebar-item plain" style={{ color: "white" }} onClick={handleClick}>
                        {item.icon && <i className={item.icon}></i>}
                        {item.title} {current}
                    </a>
                </span>
                <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
            </div>
            <div className="sidebar-content">
                {item.childrens && item.childrens.map((child, index) => <SidebarItem key={index} item={child} />)}
            </div>
        </div>
    );
}

