import React from "react";
import ReactDOM from 'react-dom/client';
//React Element
import Header from "./components/Header";
import Body from './components/Body';
import Footer from "./components/Footer";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About"
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu"
import Cart from "./components/Cart"
import Profile from './components/Profile'

// import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';

// const steps = [
//     {
//         id: '0',
//         message: 'Hey Geek!',

//         // This calls the next id
//         // i.e. id 1 in this case
//         trigger: '1',
//     }, {
//         id: '1',

//         // This message appears in
//         // the bot chat bubble
//         message: 'Please write your username',
//         trigger: '2'
//     }, {
//         id: '2',

//         // Here we want the user
//         // to enter input
//         user: true,
//         trigger: '3',
//     }, {
//         id: '3',
//         message: " hi {previousValue}, how can I help you?",
//         trigger: 4
//     }, {
//         id: '4',
//         options: [

//             // When we need to show a number of
//             // options to choose we create alist
//             // like this
//             { value: 1, label: 'View Courses' },
//             { value: 2, label: 'Read Articles' },

//         ],
//         end: true
//     }
// ];

// // Creating our own theme
// const theme = {
//     background: '#C9FF8F',
//     headerBgColor: '#197B22',
//     headerFontSize: '20px',
//     botBubbleColor: '#0F3789',
//     headerFontColor: 'white',
//     botFontColor: 'white',
//     userBubbleColor: '#FF5733',
//     userFontColor: 'white',
// };

// // Set some properties of the bot
// const config = {
//     botAvatar: "img.png",
//     floating: true,
// };

// function AppLayout() {
//     return (
//         <div className="App">
//             <ThemeProvider theme={theme}>
//                 <ChatBot

//                     // This appears as the header
//                     // text for the chat bot
//                     headerTitle="GeekBot"
//                     steps={steps}
//                     {...config}

//                 />
//             </ThemeProvider>
//         </div>
//     );
// }

// export default App

const AppLayout=()=>{
    return (
        <>
        <Header/>
        <Outlet/>
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
const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path: "/",
                element: <Body/>,
              },
              {
                path: "/about",
                element: <About/>,
                children:[
                  {
                    path:'profile',
                    element:<Profile/>
                  }
                ]
              },
              {
                path: "/contact",
                element: <Contact/>,
              },
              {
                path: "/cart",
                element: <Cart/>,
              },
              {
                path:'/restaurant/:id',
                element:<RestaurantMenu />
              }
        ]
    }
])

const heading=React.createElement('h1',{},"namste react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
// console.log(heading);




