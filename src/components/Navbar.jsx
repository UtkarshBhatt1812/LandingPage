export const Navbar = ()=>{
  return (
    <> 
      <div className="flex bg-white h-13 items-center justify-between p-4 text-xs shadow-xl font-lighter text-neutral-500 font-[Geist Mono] " >
        <img src="../../public/Enterpret_logo.svg" alt="" className="ml-8 "/>
        <div className="flex items-center gap-4 ml-30"> 
            <a href="" className="px-2 py-1 hover:text-black">Platform</a>
            <a href="" className="px-2 py-1 hover:text-black">Solutions</a>
            <a href="" className="px-2 py-1 hover:text-black">Customers</a>
            <a href="" className="px-2 py-1 hover:text-black">Resources</a>
        </div>
        <div className="flex items-center gap-3 ml-5 mr-8">
            <a href="" className="hover:text-black">Try Enterpret</a>
        <button className="bg-[#e6edf2] px-2 py-1 rounded-sm mx-1 h-8 hover:scale-105 hover:text-black hover:font-light transition-all duration-300 ease-in-out">Log in</button>
        <button className="bg-[#e6edf2] px-2 py-1 rounded-sm mx-1 h-8 hover:scale-105 hover:text-black hover:font-light transition-all duration-300 ease-in-out ">Book a demo</button>
        </div>
      </div>
    </>
  )
}

