import { useState } from 'react'
import Styles from '../styles/Signup.module.css'
import { Link } from 'react-router-dom'

function Signup() {
  const label = "text-sm mb-2"
  const userInput = "border-1 py-3 px-2 rounded-lg mb-5 max-w-full"
  const userInfo = "border-b-1 py-1 px-2 mb-5"

  const [uname, setUname] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [cpass, setCpass] = useState("")
  const [phone, setPhone] = useState("")
  const [dev, setDev] = useState("")
  const [git, setGit] = useState("")
  const [quote, setQuote] = useState("")

  return(
    <>
      <form action="" method="POST" className={Styles.form}>
        <h1 className='mb-2 text-xl underline text-yellow-500'>SignUp</h1>
        <div className={Styles.container} id='container'>
          <div className="flex flex-col w-full" id='userLogins'>
            <label className={label} htmlFor="uname">Username</label>
            <input className={userInput} type="text" name="uname" onChange={(e) => setUname(e.target.value)}/>
            <label className={label} htmlFor="email">Email <span className='text-red-500'>*</span></label>
            <input className={userInput} type="email" id='email' onChange={(e) => setEmail(e.target.value)} required/>
            <label htmlFor="pass" className={label}>Password  <span className='text-red-500'>*</span></label>
            <input className={userInput} type="password" name="pass" id='pass' onChange={(e) => setPass(e.target.value)} required/>
            <label htmlFor="cpass" className={label}>Confirm Your Password <span className='text-red-500'>*</span></label>
            <input className={userInput} type="password" name="cpass" id='cpass' onChange={(e) => setCpass(e.target.value)} required/>
            <button type="button" className='bg-yellow-500 py-2 text-lg rounded-md duration-100 cursor-pointer hover:bg-yellow-600' onClick={userDetails}>Next -&gt;</button>
          </div>
          <div className='flex flex-col w-full relative' id='userDetails'>
            <label className={label} htmlFor="phone">Phone</label>
            <input className={userInfo} type="tel" name="phone" onChange={(e) => setPhone(e.target.value)}/>
            <label className={label} htmlFor="level">Developer Level (How would you rate yourself?) <span className='text-red-500'>*</span></label>
            <select name="level" className='border-1 p-2 mb-5' onChange={(e) => setDev(e.target.value)} required>
              <option value="null">--Select Level--</option>
              <option value="beginner">Beginner</option>
              <option value="junior">Junior</option>
              <option value="professional">Professional</option>
            </select>
            <label className={label} htmlFor="github">Github Link</label>
            <input className={userInfo} type="url" name="github" onChange={(e) => setGit(e.target.value)}/>
            <label className={label} htmlFor="quote">Leave a quote for the fans:</label>
            <textarea name="quote" className='border-1 p-2 mb-5'></textarea>
            <button type="submit" className='bg-yellow-500 py-2 text-lg rounded-md duration-100 cursor-pointer hover:bg-yellow-600'>SignUp</button>
          </div>
        </div>
      </form>
      <div className='text-center my-5'>
        <p>Already have an account? <Link to="/login" className='text-blue-500 underline'>Log in</Link></p>
      </div>
    </>
  )
  
  function userDetails() {
    if(email != '' && pass != '' && cpass != '') {
      document.getElementById('container')?.classList.toggle('-translate-x-53/100')
    } else {
      alert('Please fill the required fields marked with *')
    }
  }
}


export default Signup