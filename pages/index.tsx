
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation"
import Navbar1 from "../components/Navbar1";
import Navbar from "../components/Navbar";
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Welcome from "../components/Welcome";
import Contents from "../components/Contents";
import LineChart1 from "../components/LineChart1";





function index() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;


  // const createUser = async () => {
  //   try{
  //     const response = await fetch("/api/prompt/new",
  //     {
  //         method:'POST',
  //         body: JSON.stringify({
  //             email:user,
  //             username:user,
  //             image:user
  //         }),
  //     })
  //     if (response.ok){
  //         router.push("/home");
  //     }
  //   }catch(error){
  //     console.log(error)
  //   }
  //   }


  if (user) {
    console.log(user);
    const username = user.name;
    return (
      <>
      <title>GymBros</title>

    <Navbar1 />

    <Welcome user={username}/>

    <Contents />

    <div className="pb:30 lg:p-40 "><LineChart1/></div>

    <div className="h-28"></div>
    
    </>
    //   {/* <div>
    //   Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
    //   <br></br>
    //   Your nickname is {user.nickname}.
    //  </div>
    //  </> */}
    );
  }
    return(
    <>
      
      <link
       href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700"
       rel="stylesheet"
      />
      <title>GymBros</title>
      {/* <Navbar /> */}

    

      <Hero />
  
      <Features />

      {/* <Testimonials/> */}

      <CTA />
   
      
    </>

    ) 
  // <a href="/api/auth/login">Login</a>;
}

export default index;
