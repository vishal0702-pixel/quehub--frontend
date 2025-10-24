import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { logoutUser } from "../authsllice"

export  function  Logout (){
     
    const dispatch =  useDispatch();
    
    //const {register , handleSubmit , formState:{errors}}  =useForm({})

     const handlelogout = ()=>{
            dispatch(logoutUser)
           }
 
    return ( 
         <>
          
          
        <div>
            <ul>
                <li onClick={handlelogout}></li>
            </ul>
        </div>
        </>
    )
}