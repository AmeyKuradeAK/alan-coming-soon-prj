import { IconBase } from 'react-icons';
import './App.css';
import { FaFacebook, FaTwitter, FaGooglePlus, FaInstagram } from 'react-icons/fa6';
import CountdownToDate from './CountdownTimer';


function App() {
  const targetDate = new Date('2025-02-01T00:00:00');
  return (
    <div className="h-full">
      <div className="md-content">
        <div
          className="hero md-skin-dark"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/764880/pexels-photo-764880.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)",
          }}
        >
          <div className="header">
            <div className="header__left">
              <span className="mailto">
                <a className="mailto-mail" href="mailto:nuvanteoriginals@gmail.com">
                  <button className='hover:bg-white hover:text-black font-bold text-white'>Send Email</button>
                </a>
              </span>
            </div>
            <div className="header__right">
              <ul className="social">
                <li className='hover:bg-white hover:rounded-xl' >
                  <a className='hover:text-black' href="https://www.instagram.com/nuvante.in/">
                    <FaInstagram size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="container">
            <div className="hero__wrapper">
              <div className="row">
                <div className="col-lg-10 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-1 ">
                  <div className="hero__title_inner">
                    <span className="hero__icon">
                      <img src="./Nuvante-logo-new.png" className='mt-3' alt="" srcSet="" />
                    </span>
                    <h1 className="hero__title">We Are Almost Ready for Launch</h1>
                    <p className="hero__text">
                      Perfect and awesome website to present original Clothing.
                      <br />
                      Hooking audience attention is all in the opener.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <CountdownToDate targetDate="2025-02-01T23:59:59"/>
              </div>

              <div className="service-wrapper">
                <div className="service">
                  <h2 className="service__title">Customized T-Shirts</h2>
                  <p className="service__text">Customized T-Shirt as per your need</p>
                </div>

                <div className="service">
                  <h2 className="service__title">Original Design</h2>
                  <p className="service__text">A new trend of Original Design</p>
                </div>

                <div className="service">
                  <h2 className="service__title">Accessories</h2>
                  <p className="service__text">Many cool and next gen Accessories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
