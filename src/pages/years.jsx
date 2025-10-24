import { useEffect, useState } from "react"
import axiosclient from "../utils/axiosclient"
import { useNavigate } from "react-router"

 function  Years ( ){
  const [yeardata , setyeardata ] = useState([])
      
  const navigate =  useNavigate();
    useEffect(()=>{
              const  fetchyear = async()=>{
        try {
        const  response = await  axiosclient.get("/year")
        setyeardata( response.data) ;
        console.log(response.data)
    } catch(error){
        console.log(error + " error message")
    }
    }
    
    fetchyear();
    } , [])

    
   
  const handleYearClick = (year) => {
    // Redirect to the SubjectCard page for that year
    navigate(`/subject/${year}/getsubject`);
  };
     

    


    return ( <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-16 px-6  ">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
        Select Your Academic Year
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {yeardata.map((yearObj) => (
          <div
            key={yearObj._id}
            onClick={() => handleYearClick(yearObj.year)}
            className="cursor-pointer bg-gradient-to-r from-indigo-600 to-pink-500 rounded-2xl p-6 text-center shadow-lg hover:shadow-[0_0_25px_#fff] hover:scale-105 transform transition-all duration-300 relative overflow-hidden mt-40"
          >
          
            <div className="text-white text-6xl mb-4 animate-pulse">📘</div>
            <h2 className="text-white text-2xl font-bold mb-2 capitalize">{yearObj.year}</h2>
            <p className="text-gray-100 mb-4">
              Access all subjects and PYQs for <span className="font-semibold">{yearObj.year}</span>.
            </p>
            <div className="inline-block px-4 py-2 bg-white text-indigo-700 rounded-xl hover:bg-gray-100 transition-colors font-medium">
              Explore
            </div>
          </div>
        ))}
      </div>
    </div>)
}

export  default Years 