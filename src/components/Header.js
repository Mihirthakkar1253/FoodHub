import {Link} from 'react-router-dom'


export const Title=()=>(

    <div>

       <Link to="/"> <img className='logo' alt="logo" src="https://brand.foodhub.com/images/png/foodhub_vertical_new.png"></img>
       </Link>
    </div>
   );
   const Header=()=>{
    return (

     <div className="header">
         <Title></Title>
         <div className="nav-items">
               <ul>
               <li> <Link to='/'> Home
               </Link>
               </li>
                
               <li> <Link to='/about'>
                    About
                    </Link></li>
                    <li>   <Link to="/contact">
                 Contact

                    </Link></li>
                    <li> <Link to="/cart">

                 Cart
                 </Link></li>


               </ul>
         </div>

     </div>
 )
 
}


export default Header;