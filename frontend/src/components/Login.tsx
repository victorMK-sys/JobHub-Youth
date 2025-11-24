import { Link } from "react-router-dom"

function Login() {
  const label = "text-sm mb-2"
  const userInput = "border-1 py-3 px-2 rounded-lg mb-5 max-w-full"

  return(
    <div className="flex flex-col items-center py-32">
      <form action="" method="POST" className= "flex flex-col w-80 rounded-xl p-5 shadow-2xl">
        <h1 className='mb-2 text-xl underline text-yellow-500'>Login</h1>
        <label className={label} htmlFor="uname">Username/Email <span className='text-red-500'>*</span></label>
        <input className={userInput} type="text" name="uname" required/>
        <label className={label} htmlFor="pass">Password <span className='text-red-500'>*</span></label>
        <input className={userInput} type="password" name="pass" required/>
        <button type="submit" className='bg-yellow-500 py-2 text-lg rounded-md duration-100 cursor-pointer hover:bg-yellow-600'>Log in</button>
      </form>
      <div className='my-10'>
        <p>Don't have an account? <Link to="/signup" className='text-blue-500 underline'>SignUp</Link></p>
      </div>
    </div>
  )
}

export default Login