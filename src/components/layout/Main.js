import Header from './Header';
import Footer from './Footer';
import "./Main.css"


export default function Main(props){
    return (
        <div className='main'>
            <Header>
                {props.children}
            </Header>       
               {props.children}
            <Footer className="footer"/>              
        </div>
    )
}