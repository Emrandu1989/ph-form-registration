
import { useState } from 'react'
import './App.css'
import Courses from './components/Courses'
import Cart from './components/Courses/Cart'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export const totalCredits = 15

function App() {
  const [carts, setCart] = useState([])
  
  const handleCourseSelection = (course) =>{
  
    const credits =  carts.reduce((p, c) => p + c.credit, 0);
    if((credits + course.credit) > totalCredits){
       return toast.error(`only ${totalCredits} credits allowed`)
    }
    const alreadyExists = carts.find((c) => c.id === course.id); 
    if(alreadyExists){
      
      return toast.warn("Course already selected !");
      
    }else{
      const newCart = [...carts, course];
      setCart(newCart);
       toast.success("Course Added Successfully !");
    }
     
  }

  return (
    <>
      
      <div className='p-4 bg-base-200'>
          <h1 className='text-3xl font-bold underline text-primary text-center mb-5'>Course Registration</h1>
         <div className='grid grid-cols-12'>
           <div className='col-span-10'>
           <Courses handleCourseSelection={handleCourseSelection} />
           </div>
             <div className='col-span-2'>
             <Cart carts={carts}/>
             </div>
         </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default App
