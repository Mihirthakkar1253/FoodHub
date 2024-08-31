import React from "react";
import ReactDOM from 'react-dom/client';
//React Element
import Header from "./components/Header";



const RestruantList={
    name:"Burger King",
    image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_391899.jpg',
    rating:'4.2 stars',
    cuisins:['Burgers','American']
    

}
const RestruantCard=()=>{
    return  (
   <div className='card'>
    <img src={RestruantList.image}></img>
    <h2>{RestruantList.name}</h2>
    <h3>{RestruantList.cuisins}</h3>
    <h4>{RestruantList.rating}</h4>
   </div>
    )
}
const Body=()=>{
    return (
        <div>
          
            <RestruantCard/>
        </div>

    )
}


const Footer=()=>{
    return (
       <div>
        Footer
       </div>
    )
}
const AppLayout=()=>{
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
           {/*
    Header 
       Logo
       Nav Items(Right Side)
       cart
    Body
        Search Bar
        RestruantCard
           Image
           Name
           Rating
           cusines


    Footer
         links
         copyright
    
    
    
    */ 


   }

        </>



    )
}















const heading=React.createElement('h1',{},"namste react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
console.log(heading);




