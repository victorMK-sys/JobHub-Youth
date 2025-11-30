import { useState } from 'react'
import Styles from '../styles/Signup.module.css'
import { Link } from 'react-router-dom'
import { addUser } from '../index'

const label = "text-sm mb-2"
const userInput = "border-1 py-3 px-2 rounded-lg mb-5 max-w-full"
const userInfo = "border-b-1 py-1 px-2 mb-5"


function Signup() {
  const [uname, setUname] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [cpass, setCpass] = useState("")
  const [phone, setPhone] = useState("")
  const [emp, setEmp] = useState(false)
  const [git, setGit] = useState("")
  const [quote, setQuote] = useState("")

  return(
    <div className='relative'>
      <form method="POST" className={Styles.form}>
        <h1 className='mb-2 text-xl underline text-yellow-500'>SignUp</h1>
        <div className={Styles.container} id='container'>
          <div className="flex flex-col w-full" id='userLogins'>
            <label className={label} htmlFor="uname">Username</label>
            <input className={userInput} type="text" name="uname" onChange={(e) => setUname(e.target.value)}/>
            <label className={label} htmlFor="email">Email<span className='text-red-500'>*</span></label>
            <input className={userInput} type="email" id='email' onChange={(e) => setEmail(e.target.value)} required/>
            <label htmlFor="pass" className={label}>Password<span className='text-red-500'>*</span></label>
            <input className={userInput} type="password" name="pass" id='pass' onChange={(e) => setPass(e.target.value)} required/>
            <label htmlFor="cpass" className={label}>Confirm Your Password <span className='text-red-500'>*</span></label>
            <input className={userInput} type="password" name="cpass" id='cpass' onChange={(e) => setCpass(e.target.value)} required/>
            <div className='bg-red-200 p-2 text-sm text-red-700 border-1 border-red-700 rounded-md mb-5 hidden' id='pass_err'>Sorry, passwords do not match</div>
            <button type="button" className='bg-yellow-500 py-2 text-lg rounded-md duration-100 cursor-pointer hover:bg-yellow-600' onClick={userDetails}>Next -&gt;</button>
          </div>
          <div className='flex flex-col w-full'>
            <label className={label} htmlFor="phone">Phone</label>
            <input className={userInfo} type="tel" name="phone" onChange={(e) => setPhone(e.target.value)}/>
            <label className={label} htmlFor="github">Github Link</label>
            <input className={userInfo} type="url" name="github" onChange={(e) => setGit(e.target.value)}/>
            <fieldset className='mb-5 flex items-center gap-2'>
              <label htmlFor="emp" className={label}>Are you an employer?</label>
              <input type="radio" name='emp' value="Yes" className='w-3 h-3 -mt-1' onClick={() => setEmp(true)}/>
            </fieldset>
            <label className={label} htmlFor="quote">Leave a quote for the fans:</label>
            <textarea name="quote" className='border-1 p-2 mb-5' onChange={(e) => setQuote(e.target.value)}></textarea>
            <button type='button' className='bg-yellow-500 py-2 text-lg rounded-md duration-100 cursor-pointer hover:bg-yellow-600' onClick={() => addUser(uname, email, pass, phone, emp, git, quote)}>SignUp</button>
          </div>
        </div>
      </form>
      <div className='text-center my-5'>
        <p>Already have an account? <Link to="/login" className='text-blue-500 underline'>Log in</Link></p>
      </div>
    </div>
  )
  
  function userDetails() {
    if(email != '' && pass != '' && cpass != '') {
      pass === cpass ? document.getElementById('container')?.classList.toggle('-translate-x-53/100')
        : document.getElementById('pass_err')?.classList.toggle('hidden')
    } else {
      alert('Please fill the required fields marked with *')
    }
  }
}

export default Signup