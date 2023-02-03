import './App.css';
import logo from './img/logo.png';
import search from './img/search.png'
import cart from './img/cart.png';
import profile from './img/profile.png';
import surfaceMachines from './img/surface-machines.jpg';
import arrowLeft from './img/arrow-left.png';
import arrowRight from './img/arrow-right.png';
import blackCircle from './img/black-circle.png';
import productMicrosoft365 from './img/product-Microsoft-365.jpg';
import productSurface from './img/product-surface.webp';
import productXvox from './img/product-xbox.webp';
import productBook from './img/product-Book.webp';
import productlaptop from './img/product-Laptop.webp'
import productBrief from './img/product-briefcase.webp';
import surfacePro from './img/product-surface-pro.avif';
import save from './img/gldn-8SGB4NHFCQ27-VM600821-Lenovo-IdeaPad-5Pro-Laptop-HighlightHero_VP4-1260x600.jpeg';
import saveBusiness from './img/business1.webp';
import teams from './img/business2.webp';

function App() {
  return (
    <div className='App'>
      <header>
        <div className='menubar'>
          <div className='logo'>
            <img src={logo} alt='Microsoft logo' id='logo' />
          </div>
          <div className='navbar'>
            <ul>
              <li>
                <a href='#'>Microsoft 365</a>
              </li>
              <li>
                <a href='#'>Teams</a>
              </li>
              <li>
                <a href='#'>Window</a>
              </li>
              <li>
                <a href='#'>Surface</a>
              </li>
              <li>
                <a href='#'>Xbox</a>
              </li>
              <li>
                <a href='#'>Deals</a>
              </li>
              <li>
                More <i className='fa-solid fa-angle-down' />
                <ul>
                  <li>
                    <a href='#'>Small Business</a>
                  </li>
                  <li>
                    <a href='#'>Support</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='navbar2'>
            <ul>
              <li>
                All Microsoft <i className='fa-solid fa-angle-down' />
              </li>
              <li>
                <img src={search} alt='Search' id='search-icon' />
              </li>
              <li>
                <img src={cart} alt='Cart' id='cart-icon' />
              </li>
              <li>
                <img src={profile} alt='Profile' id='profile-icon' />
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className='promo-banner'>
        <h3>
          <a href='#'>
            Get help shopping for a Surface. Book a free online appointment with
            a Microsoft Store associate{' '}
            <i className='fa-solid fa-chevron-right' />
          </a>
        </h3>
      </div>
      {/* END OF MENU AND PROMITION BAR */}
      {/* ----FIRST CONTAINER--- */}
      <div className='first-container'>
        <img src={surfaceMachines} alt='Surface Machines' />
        <div className='first-container-save'>
          <div className='first-container-save-content'>
            <h2>Save on Surface</h2>
            <p>
              Find a great deal on select Surface devices built for all the ways
              you create, work, play and connect
            </p>
            <button type='button' id='deals-btn'>
              <h4>Shop Surface deals</h4>
            </button>
          </div>
        </div>
        <div className='slider-nav'>
          <ul>
            <li>
              <img src={arrowLeft} alt='' id='arrowimg' />
            </li>
            <li>
              <img src={blackCircle} alt='' id='slider-circle' />
            </li>
            <li>
              <img src={blackCircle} alt='' id='slider-circle' />
            </li>
            <li>
              <img src={arrowRight} alt='' id='arrowimg' />
            </li>
          </ul>
        </div>
      </div>
      {/* ----FIRST CONTAINER--- */}
      {/* ----SECOND CONTAINER--- */}
      <div className='second-container'>
        <div className='product-panel'>
          <img
            src={productMicrosoft365}
            alt='product-Microsoft-365'
          />
          <h4>
            <a href='#'>Microsoft 365</a>
          </h4>
        </div>
        <div className='product-panel'>
          <img src={productSurface} alt='product-surface' />
          <h4>
            <a href='#'>Shop Surface devices</a>
          </h4>
        </div>
        <div className='product-panel'>
          <img src={productXvox} alt='Xbox' />
          <h4>
            <a href='#'>Buy Xbox games and consoles</a>
          </h4>
        </div>
        <div className='product-panel'>
          <img src={productBook} alt='book' />
          <h4>
            <a href='#'>Shop for students</a>
          </h4>
        </div>
        <div className='product-panel'>
          <img src={productlaptop} alt='product-Laptop' />
          <h4>
            <a href='#'>Find your next PC</a>
          </h4>
        </div>
        <div className='product-panel'>
          <img src={productBrief} alt='Shop Business' />
          <h4>
            <a href='#'>Shop Business</a>
          </h4>
        </div>
      </div>
      {/* ----SECOND CONTAINER--- */}
      {/* ----THIRD CONTAINER--- */}
      <div className='third-container'>
        <div className='featured'>
          <img src={surfacePro} alt='product-surface-pro' />
          <h2>Surface Pro 8 (i5) + Surface Pro Keyboard</h2>
          <br />
          <p>
            Complete your study setup and save big when you bundle the most
            powerful Pro with a sleek, compact Surface keyboard. Select devices
            starting at $899.99. If you have questions before you buy, chat with
            a product expert.
          </p>
          <h5>
            Shop Now <i className='fa-solid fa-chevron-right' />
          </h5>
          <h5>
            Book an appointment <i className='fa-solid fa-chevron-right' />
          </h5>
        </div>
        <div className='featured'>
          <img
            src='./img/product-Surface-Laptop-Studio.jpeg'
            alt='product-surface-pro'
          />
          <h2>Up to $500 off select Surface Laptop Studio</h2>
          <br />
          <p>
            CArtistic explorations to complex equations, do it all with a PC
            that adapts in a snap. Starting at $1399.99.
          </p>
          <h5>
            Shop Surface Laptop Studio{' '}
            <i className='fa-solid fa-chevron-right' />
          </h5>
        </div>
        <div className='featured'>
          <img src='./img/product-surface-pro.avif' alt='game' />
          <h2>PC Game Pass</h2>
          <br />
          <p>
            Unlock 100+ great games and EA Play, plus get your first month for
            $1. Offer available to new subscribers only.
          </p>
          <h5>
            Join Now <i className='fa-solid fa-chevron-right' />
          </h5>
          <h5>
            COmpare Plans <i className='fa-solid fa-chevron-right' />
          </h5>
        </div>
        <div className='featured'>
          <img src='./img/product-Xbox.avif' alt='Xbox' />
          <h2>Buy Xbox Series S, get a bonus game</h2>
          <br />
          <p>
            CGet a digital version of Madden NFL 23 or another select game when
            you purchase an Xbox Series S console.
          </p>
          <h5>
            Shop Xbox Series S <i className='fa-solid fa-chevron-right' />
          </h5>
        </div>
      </div>
      {/* ----THIRD CONTAINER--- */}
      {/* ---FOURTH CONTAINER--- */}
      <div className='fourth-container'>
        <img
          src={save}
          alt='Lemovo'
        />
        <div className='fourth-container-content'>
          <h2>Save up to $500 on select PCs</h2>
          <br />
          <p>
            Discover great deals on powerful devices to help you study smarter
            and relax after class
          </p>
          <button type='button' id='deals-btn'>
            <h4>Shop PC deals</h4>
          </button>
        </div>
      </div>
      {/* ---FOURTH CONTAINER--- */}
      {/* ---FIFTH CONTAINER--- */}
      <div className='the-fifth'>
        <h1>For Business</h1>
        <div className='fifth-container'>
          <div className='featured'>
            <img src={saveBusiness} alt='product-surface-pro' />
            <h2>Save up to $450 on select Surface Pro 8 for Business</h2>
            <br />
            <p>
              Get unprecedented levels of performance and versatility on a
              13-inch screen. Available with Windows 11.
            </p>
            <h5>
              Shop Now <i className='fa-solid fa-chevron-right' />
            </h5>
          </div>
          <div className='featured'>
            <img src={teams} alt='product-surface-pro' />
            <h2>Get Microsoft Teams for free</h2>
            <br />
            <p>
              Online meetings, chat, and shared cloud storage—all in one place.
            </p>
            <h5>
              Sign up for free <i className='fa-solid fa-chevron-right' />
            </h5>
          </div>
          <div className='featured'>
            <img src='./img/business3.webp' alt='product-surface-pro' />
            <h2>Microsoft 365 for business</h2>
            <br />
            <p>
              Stay a step ahead with powerful apps for productivity, connection,
              and security. Make an appointment with an expert to determine the
              best solution for your business.
            </p>
            <h5>
              Shop Now <i className='fa-solid fa-chevron-right' />
            </h5>
            <h5>
              Book a consultation <i className='fa-solid fa-chevron-right' />
            </h5>
          </div>
          <div className='featured'>
            <img src='./img/business4.jpeg' alt='product-surface-pro' />
            <h2>Windows 11 for business is here</h2>
            <br />
            <p>
              Designed for hybrid work. Powerful for employees. Consistent for
              IT. Secure for all.
            </p>
            <h5>
              Learn more <i className='fa-solid fa-chevron-right' />
            </h5>
          </div>
        </div>
      </div>
      {/* ---FIFTH CONTAINER--- */}
      {/* ---SIXTH CONTAINER (UKRAINE BANNER)--- */}
      <div className='sixth-container'>
        <img src='./img/ukrane-banner.avif' alt='Ukraine' />
        <div className='sixth-container-content'>
          <h2>Defending Ukraine: Early Lessons from the Cyber War</h2>
          <br />
          <p>
            Discover great deals on powerful devices to help you study smarter
            and relax after class
          </p>
          <button type='button' id='deals-btn'>
            <h4>Read the report</h4>
          </button>
        </div>
        <div className='report-slider-nav'>
          <ul>
            <li>
              <img src='./img/arrow-left.png' alt='' id='arrowimg' />
            </li>
            <li>
              <img src='./img/black-circle.png' alt='' id='slider-circle' />
            </li>
            <li>
              <img src='./img/black-circle.png' alt='' id='slider-circle' />
            </li>
            <li>
              <img src='./img/arrow-right.png' alt='' id='arrowimg' />
            </li>
          </ul>
        </div>
      </div>
      {/* ---SIXTH CONTAINER (UKRAINE BANNER)--- */}
      {/* ----FOOTER---- */}
      <footer>
        <div className='footer-container'>
          <div className='footer-widgets'>
            <h4>What's new</h4>
            <li>Surface Laptop Go 2</li>
            <li>Surface Pro 8</li>
            <li>Surface Laptop Studio</li>
            <li>Surface Pro X</li>
            <li>Surface Go 3</li>
            <li>Surface Duo 2</li>
            <li>Surface Pro 7+</li>
            <li>Windows 11 apps</li>
          </div>
          <div className='footer-widgets'>
            <h4>What's new</h4>
            <li>Surface Laptop Go 2</li>
            <li>Surface Pro 8</li>
            <li>Surface Laptop Studio</li>
            <li>Surface Pro X</li>
            <li>Surface Go 3</li>
            <li>Surface Duo 2</li>
            <li>Surface Pro 7+</li>
            <li>Windows 11 apps</li>
          </div>
          <div className='footer-widgets'>
            <h4>What's new</h4>
            <li>Surface Laptop Go 2</li>
            <li>Surface Pro 8</li>
            <li>Surface Laptop Studio</li>
            <li>Surface Pro X</li>
            <li>Surface Go 3</li>
            <li>Surface Duo 2</li>
            <li>Surface Pro 7+</li>
            <li>Windows 11 apps</li>
          </div>
          <div className='footer-widgets'>
            <h4>What's new</h4>
            <li>Surface Laptop Go 2</li>
            <li>Surface Pro 8</li>
            <li>Surface Laptop Studio</li>
            <li>Surface Pro X</li>
            <li>Surface Go 3</li>
            <li>Surface Duo 2</li>
            <li>Surface Pro 7+</li>
            <li>Windows 11 apps</li>
          </div>
          <div className='footer-widgets'>
            <h4>What's new</h4>
            <li>Surface Laptop Go 2</li>
            <li>Surface Pro 8</li>
            <li>Surface Laptop Studio</li>
            <li>Surface Pro X</li>
            <li>Surface Go 3</li>
            <li>Surface Duo 2</li>
            <li>Surface Pro 7+</li>
            <li>Windows 11 apps</li>
          </div>
          <div className='footer-widgets'>
            <h4>What's new</h4>
            <li>Surface Laptop Go 2</li>
            <li>Surface Pro 8</li>
            <li>Surface Laptop Studio</li>
            <li>Surface Pro X</li>
            <li>Surface Go 3</li>
            <li>Surface Duo 2</li>
            <li>Surface Pro 7+</li>
            <li>Windows 11 apps</li>
          </div>
        </div>
      </footer>
      {/* ----FOOTER---- */}
    </div>
  );
}

export default App;
