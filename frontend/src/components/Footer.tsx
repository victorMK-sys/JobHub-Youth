function Footer() {
  const a = "font-bold duration-100 hover:border-b-1"
  return(
    <footer className="bg-gray-950 text-white mt-5 py-5 text-center">
      <div className="flex justify-center mb-5">
        <ul className="flex gap-5">
          <li><a className={a} href="#">HOME</a></li>
          <li><a className={a} href="#">SIGNUP</a></li>
          <li><a className={a} href="#">CONTACT</a></li>
        </ul>
      </div>
      <div>&copy;  2025 SakaJobo All rights reserved</div>
      <div></div>
    </footer>
  )
}

export default Footer