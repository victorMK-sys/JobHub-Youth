function Navbar() {
  const link = 'cursor-pointer text-base font-bold hover:text-yellow-500'
  const largeScreen = {
    nav: "bg-white flex sticky top-0 justify-between items-center px-4 py-3 shadow-xl z-50",
    div: "flex",
    menu: "hidden"
  }
  const smallScreen = {
    nav: "bg-white flex sticky top-0 justify-between items-center px-4 py-3 shadow-xl z-50",
    div: "hidden",
    menu: "flex"
  }

  const screen = document.body.offsetWidth <= 550 ? smallScreen : largeScreen
  const menu = document.body.offsetWidth <= 500 ? "inline" : "hidden"

  return(
    <nav className={screen.nav}>
      <div>
        <h1 className="font-bold text-2xl text-red-800 font-mono cursor-pointer">sakaJobo</h1>
      </div>
      <div className={screen.div}>
        <ul className="flex items-center justify-center gap-5">
          <li className={link}>Home</li>
          <li className={link}>About</li>
          <li className={link}>Listings</li>
          <li className="cursor-pointer text-base px-2 py-1 rounded-sm hover:bg-yellow-500 hover:text-white">Login</li>
          <li className={link}>
            <div className="flex">
              <button type="button">
                <img className="w-5" src="/user.png" alt="PROFILE" />
              </button> 
            </div>  
          </li>
        </ul>
      </div>
      <div className={menu}>
        <button type="button" onClick={displayMenu}>
          <img className="w-5" src="/more.png" alt="Menu" />
        </button>
      </div>
      <div className="absolute top-2 right-0 bg-black w-1/2 py-2 hidden" id="menuOps">
        <div className="rounded-full w-6 text-center bg-red-700 float-right mr-2 font-bold"><button type="button" onClick={removeMenu}>X</button></div>
        <ul>
          <li className="text-white border-b-1 border-gray-300 px-2 mt-5">Home</li>
          <li className="text-white border-b-1 border-gray-300 px-2">Listings</li>
          <li className="text-white px-2">Profile</li>
        </ul>
      </div>
    </nav>
  )
}

function displayMenu() {
  document.getElementById('menuOps')?.classList.add("inline")
}

function removeMenu() {
  document.getElementById('menuOps')?.classList.remove("inline")
  document.getElementById('menuOps')?.classList.add("hidden")
}

export default Navbar