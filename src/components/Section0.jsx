import '../assets/style/Section0.css';
import bk from '../assets/images/bk.jpg';
import chatgpt from '../assets/images/chATGPT.jpg';
import google from '../assets/images/google.jpg';
import apple from '../assets/images/apple.jpg';
import gemini from '../assets/images/gemini.jpg';

function Section0() {


  const handleLogoClick = () => {
    
  };

  return (
    <div className='Section0'>
      <div className='Section0-Navbar'>
        <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <h1>FrDesign</h1>
        </div>
        <div className='Section0-Navbar-Words'>
          <div><a href='#About'>About</a></div>
          <div><a href='#Contact'>Contact</a></div>
          <div><a href='#Work'>Work</a></div>
        </div>
      </div>
      <div className="Section0-body">
        <div className='Section0-words'>
          <h2>Welcome to FR Design</h2>
          <a href='#aplly' className='here'><span>Apply Now!</span></a>
        </div>
        <div className='Section0-image'>
          <img src={bk} alt="Background" />
        </div>
      </div>
      <div className='Section0-footer'>
        <hr />
        <div className='Section0-footer-items'>
          <div className='Section0-footer-item'><img src={chatgpt} alt="ChatGPT" /></div>
          <div className='Section0-footer-item'><img src={google} alt="Google" /></div>
          <div className='Section0-footer-item'><img src={apple} alt="Apple" /></div>
          <div className='Section0-footer-item'><img src={gemini} alt="Gemini" /></div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Section0;
