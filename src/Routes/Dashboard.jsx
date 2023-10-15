import { signOut,getAuth } from "firebase/auth"
import { HiOutlineArrowCircleRight } from "react-icons/hi";

export default function Dashboard(){
    const auth = getAuth()
    async function handleSignOut(){
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }
    return <section className="bg-green-950 text-white h-full lg:h-screen">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Congratulations, You are on the waitlist.
        </h1>
  
        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <button  onClick={() => {handleSignOut()}}>

          <a
            className="block w-full rounded bg-green-600 px-8 py-3 text-sm font-medium text-white hover:scale-105 duration-100 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
           
          >
            <span className='flex items-center m-auto'> Logout
                <i className='ml-2 mt-1'>
                    <HiOutlineArrowCircleRight />
                    </i>
                </span>
          </a>

          </button>
         

          
        </div>
      </div>
    </div>
  </section>
  

    
}