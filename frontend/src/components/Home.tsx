import { Link } from "react-router-dom"
import Styles from "../styles/Home.module.css"

function Home() {
  const largeScreen = {
    h1: "text-8xl font-bold text-red-800 mb-5",
    p: "text-gray-700 text-lg leading-8 max-w-screen-md text-center"
  }
  const smallScreen = {
    h1: "text-red-700 text-bold text-7xl mb-5",
    p: "text-xs mx-5 text-center leading-7 text-gray-700"
  }
  const device = document.body.offsetWidth <= 550 ? smallScreen : largeScreen

  return(
    <>
      <section>
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className={device.h1}>sakaJobo</h1>
          <p className={device.p}>Chase your future with us!</p>
          <p className={device.p}>We connect you to your dream job so you can scale up and secure your career. Sign up and stay in the wave with fellow developers today!</p>
          <div className="mt-5 ">
            <Link className="bg-yellow-500 text-white py-2 px-5 rounded-sm cursor-pointer duration-100 text-xl hover:bg-yellow-600" to="/signup">Sign Up</Link>
          </div>
        </div>
      </section>
      <section className={Styles.aboutSection}>
        <div className={Styles.aboutLeft}>
          <h2>About Us</h2>
          <p>
            Empowering developers and employers to connect, collaborate, and grow a hub for discovering opportunities, showcasing talent, and building
            meaningful professional relationships.
          </p>
          <p>
            Our platform brings together curated job listings, project portfolios,
            and community-driven discussions to help developers highlight their work
            and stay visible in a competitive market.
          </p>
          <p>
            Whether you're hiring, seeking your next challenge, or sharing what
            you've built, we have something for everyone.
          </p>
        </div>

        <div className={Styles.aboutRight}>
          <img src="/001.jpg" alt="Collaborate with devs" className={Styles.imgSlide}/>
          <img src="/002.jpg" alt="Collaborate with devs" className={Styles.imgSlide}/>
          <img src="/003.jpg" alt="Collaborate with devs" className={Styles.imgSlide}/>
        </div>
      </section>

    </>
  )
}

export default Home