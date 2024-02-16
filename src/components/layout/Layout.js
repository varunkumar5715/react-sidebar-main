import { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Main from './Main'
import './layout.css'

export default function Layout (props){
    const [redirect, setRedirect] = useState(1);
      

    return(
        <div className='layout'>    
            <Sidebar />       
            <Main>
                {/* <div onClick={click}>click</div> */}
                {props.children}
            </Main> 
        </div>
    )    
}
