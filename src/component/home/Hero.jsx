

function Hero() {
  return (
    <>
    <div className=" relative min-h-screen bg-red-400 text-white pt-8">
      <div className="z-10 absolute w-[500px] px-10">
        <h1 className=" text-6xl font-semibold leading-normal text-yellow-300">D'MILLION <br/> Photography</h1>
      <p>I am always searching for million 
        beautiful moments occurring in everyday life
        . I view every photo shoot as an opportunity
         to capture those moments and share them with 
         the world.
         </p>
         <button className=" bg-yellow-600 rounded-xl py-3 px-8 font-medium inline-block mr-4 ">
          BOOK NOW</button>
         
      </div>
      <div className="absolute top-0">
        <img src="/background.jpg" alt="" />
      </div>
    </div>
    
    </>
  )
}

export default Hero