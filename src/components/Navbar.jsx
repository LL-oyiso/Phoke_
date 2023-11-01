import React from 'react'

function Navbar() {
  const [nav, setNav] = useState(false)
    const handleNav = () =>
    {
        setNav(!nav)
    }
  return (
    <div  className=' sticky top-0 w-full flex   justify-between items-center z-10 text-black  bg-black '>
       <a href ="#hero"><h1 className='p-4 font-bold text-2xl '>Phoke</h1></a>
      <ul className='hidden sm:flex px-4 font-[Montserrat]  '>
       
        <li className='text-xl hover:-translate-y-0 hover:scale-90 hover:bg-gray-100 duration-400 rounded-3xl '>
          <a href ="#creators">About us</a>
        </li>
        <li className='text-xl hover:-translate-y-0 hover:scale-90 hover:bg-gray-100 duration-400 rounded-3xl '>
        <a href ="#specs">Features</a>
        </li>
        <li className='text-xl hover:-translate-y-0 hover:scale-90 hover:bg-gray-100 duration-400 rounded-3xl '>
        <a href ="#subscribe">Subscribe</a>
        </li>

        <li className="">
        <button className='bg-black text-white'>LOGIN</button>
        </li>
        <li className=''>
        <button className='border-black'>Sign up</button>
        </li>
      </ul>
      {/* Hamburger icon anything above small it will be hidden */}
      <div onClick ={handleNav} className='sm:hidden z-10'>
        <FaBars size ={20} className ='mr-4 cursor-pointer'/>
      </div>

      {/* Mobile menu */}
      <div onClick ={handleNav} className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-black-300 left-0 top-0 w-full h-screen bg-gray-300 px-4 py-7 flex flex-col': 'absolute top-0 h-screen left-[-100%] ease-in duration-300'}>
        <ul className='h-full w-full text-center pt-12'>
        <li className='text-2xl py-8'>
          <a href ="/">Home</a>
        </li>
        <li className='text-2xl py-8'>
        <a href ="#about">About us</a>
        </li>
        <li className='text-2xl py-8'>
        <a href ="#update">Features</a>
        </li>
        <li className="">
        <button className='bg-black text-white'>LOGIN</button>
        </li>
        <li className=' '>
        <button>Sign up</button>
        </li>
        </ul>
      </div>
      </div>
  )
}
