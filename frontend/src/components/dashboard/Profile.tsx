import { useUserInfo } from "./dashboardRouter"

interface User {
  uname: string,
  email: string,
  phone: string,
  emp: boolean,
  git: string,
  quote: string
}

function Profile() {
  const pStyles = "mb-4 rounded-full border-1 border-gray-300 p-5 text-gray-700"
  const user = useUserInfo() as User

  return (
    <div>
      <div className="border-b-1 border-gray-300 pb-2 mb-4">
        <h2 className="text-sm text-red-400">Profile</h2>
      </div>
      <div className="">
        <div className="mb-5 flex items-center justify-center">
          <img src="/profile.png" alt="User Profile" className="max-w-48"/>
        </div>
        <div>
          <p className={pStyles}>{user.uname}</p>
          <p className={pStyles}>Employer: {user.emp ? "Yes" : "No"}</p>
          <p className={pStyles}>Github Link: <a href={user.git} className="text-yellow-500 underline" target="_blank">{user.git}</a></p>
          <p className={pStyles}>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
          <div className={`flex justify-between ${pStyles}`}>
            <p>Phone No: <span className="rounded-sm" id="num">{user.phone}</span></p>
            <button type="button" className="bg-yellow-500 px-2 py-1 cursor-pointer text-white rounded-md" id="btn" onClick={hideNumber}>Hide</button>
          </div>
          <p className="italic text-center text-small text-gray-600">{user.quote}</p>
        </div>
      </div>
    </div>
  )
}

function hideNumber() {
  const num = document.getElementById('num')
  num?.classList.toggle('bg-gray-700')
}

export default Profile