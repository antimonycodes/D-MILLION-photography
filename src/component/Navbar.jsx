
function Navbar() {
  return (
    <>
      <nav className=" bg-slate-900 flex items-center justify-between px-10 py-5">
        <img src='/Logo.png' className=" w-8 cursor-pointer animate-spin"/>
        <ul className=" flex items-center justify-between px-5">
          <li className=" no-underline text-white px-4">Home</li>
          <li className=" no-underline text-white px-4">Gallery</li>
          <li className=" no-underline text-white px-4 ">Pricelist</li>
          <li className=" no-underline text-white px-4 ">About</li>
          <li className=" no-underline text-white px-4  "> Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar