import { useState } from "react";
import SidebarItem from "../sidebar/SidebarItem"
import items from "../../data/sidebar.json"
import Logo from '../../assets/logo.jpg'
import './sidebar.css'




export default function Sidebar(){
    // const [test, setTest] = useState(0);

    return (
        <div className="sidebar">      
        <div className="logo">
              <img src={Logo} alt="Eltol_Logo" className="logo_image" />
          </div>    
          <div>
              { items.map((item, index) => <SidebarItem key={index} item={item} />) }
          </div>          
        </div>
    )
}
