import { Link } from "react-router-dom"

function Footer() {
  const a = "font-bold duration-100 hover:border-b-1"
  return(
    <footer className="bg-gray-950 text-white py-5 text-center">
      <div className="flex justify-center mb-5">
        <ul className="flex gap-5">
          <Link className={a} to="/">HOME</Link>
          <Link className={a} to="/signup">SIGNUP</Link>
          <Link className={a} to="/contact">CONTACT</Link>
        </ul>
      </div>
      <div>&copy;  2025 SakaJobo All rights reserved</div>
      <div></div>
    </footer>
  )
}

export default Footer