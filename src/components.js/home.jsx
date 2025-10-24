import Landingpage from "./landingpage"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import { Routes,Route, Navigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { checkUser } from "../authsllice"
import Years from "../pages/years"
import Subjectcard from "../pages/subjectcard"
import Chaptername from "../pages/chaptername"
import TopicsNotes from "../pages/topicscontent"
import Aisupport from "../pages/aisupport"




export default function  Home (){
   
   const {isAuthenticated , loading} =  useSelector((state)=>state.auth);
   const   dispatch =  useDispatch();

   useEffect(()=>{
    dispatch(checkUser());
   },[dispatch])

   
  if (loading) {
    // Show loader or nothing while checking session
    return <div>Loading...</div>;
  }
    return ( <>
    <Routes>
      <Route path ="/" element = { isAuthenticated?<Landingpage></Landingpage>:<Navigate to="/register" /> }></Route>
       <Route path = "/login" element ={<Login></Login>}></Route>
        <Route path = "/register" element ={<Signup></Signup>}></Route>
        <Route path = "/year" element = { <Years> </Years>}></Route>
         <Route
        path="/subject/:year/getsubject"
        element={<Subjectcard/>}
      />
      <Route  path="chapter/:subjectname/getchapters" element ={<Chaptername></Chaptername>}></Route>

      <Route path = "topics/:chaptername/gettopics" element = { <TopicsNotes></TopicsNotes>}></Route>
      <Route path = "/ai/chat" element= {<Aisupport></Aisupport>}></Route>
     </Routes> 
    
      
    </>)
}

