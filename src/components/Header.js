export const Title=()=>(

    <div>

        <img className='logo' alt="logo" src="https://yt3.googleusercontent.com/ikMbQJ70eQ0IVfr1OmC6UKxx1niHm0GOeEltnhld5fgglugwMG1iXYSOOxCnbOm7bDojbqILww=s900-c-k-c0x00ffffff-no-rj"></img>
    </div>
   );
   const Header=()=>{
    return (

     <div className="header">
         <Title></Title>
         <div className="nav-items">
               <ul>
                 <li>Home</li>
                 <li>About</li>
                 <li>Contact</li>
                 
                 <li>Cart</li>


               </ul>
         </div>

     </div>
 )
 
}


export default Header;