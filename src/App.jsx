import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Button from '../src/component/button/button';
import Input from '../src/component/formInput/formInput';
import CheckboxLine from './component/checkBox/checkBox';
import Signup from './pages/signup/signup';
import WelcomePage from './pages/welcomePage/welcomePage';
import Poules from './pages/poules/poules'
import logo from './assets/logo-title.png';
import gradientLogo from './assets/rugby-petit.svg';
import appleLogo from './assets/appleWhiteLogo.svg';
import facebookLogo from './assets/facebookLogo.svg';
import googleLogo from './assets/googleLogo.svg';

function HomePage() {
  return (
    <div className="app">
      <div className="white-section">
        <div className="centered-content">
          <img src={logo} alt="Logo" className="logo"/>
        </div>
      </div>
      <div className="gradient-section">
        <img
          src={gradientLogo} 
          alt="Nouveau logo" 
          className="gradientLogo"
        />
        <div className="content">
          <h1>Content de vous revoir</h1>
          <p>Vous n’avez pas de compte ? 
            <Link to="/signup" className="subscribe">S'inscrire</Link>
          </p>
          <h3 className="h3">Connectez-vous à l'aide de votre réseau social</h3>
          <div className="button-wrapper">
            <Button text="Rejoignez-nous Apple" logoSrc={appleLogo} className="button" backgroundColor="#000" color="#ffffff"/>
            <Button text="Rejoignez-nous Facebook" logoSrc={facebookLogo}className="button" backgroundColor="#1877F2" color="#ffffff"/>
            <Button text="Rejoignez-nous Google" logoSrc={googleLogo}className="button" backgroundColor="#FFF" color="#000"/>
          </div>
          <div className="line-with-text">
            <hr className="line" />
            <span className="text">ou</span>
            <hr className="line" />
          </div>
          <div className="connexionForm">
            <Input title="Nom d’utilisateur ou e-mail" placeholder="exemple@mail.com" />
            <Input title="Mot de passe" placeholder="Mot de passe" />
            <CheckboxLine texte="Se souvenir de moi" forgot="Mot de passe oublié?"></CheckboxLine>
            <Link to="/welcomePage" className="welcomePage">
              <Button
                text="Connexion"
                logoSrc=""
                className="button"
                backgroundColor="#5BAB2C"
                color="#fff"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcomePage" element={<WelcomePage />} />
        <Route path="/poules" element={<Poules />} />
      </Routes>
    </Router>
  );
}

export default App;
