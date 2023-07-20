import React from "react";
import "./signup.css";
import Button from "../../component/button/button";
import Input from "../../component/formInput/formInput";
import SelectInput from "../../component/formInputSelector/formInputSelector";
import CheckboxLine from "../../component/checkBox/checkBox";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "../../assets/logo-title.png";
import gradientLogo from "../../assets/rugby-petit.svg";
import appleLogo from "../../assets/appleWhiteLogo.svg";
import facebookLogo from "../../assets/facebookLogo.svg";
import googleLogo from "../../assets/googleLogo.svg";

function SignupPage() {
  return (
    <div className="app">
      <div className="white-section">
        <div className="centered-content">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="gradient-section">
        <img
          src={gradientLogo}
          alt="Nouveau logo"
          className="signupGradientLogo"
        />
        <div className="signupContent">
          <h1>Créer un compte</h1>
          <p>
            Lorsque vous créez un compte, vos coordonnées seront traitées
            conformément à la politique de confidentialité de World Rugby
          </p>
          <p>
            Vous avez déjà un compte ?
            <Link to="/visitors/" className="signin">
              Connexion
            </Link>
          </p>
          <div className="accountDetail">
            <div className="accountDetailTitle">1. Détails du compte</div>
            <div className="singupButton-wrapper">
              <Button
                text="Rejoignez-nous Apple"
                logoSrc={appleLogo}
                className="button"
                backgroundColor="#000"
                color="#ffffff"
              />
              <Button
                text="Rejoignez-nous Facebook"
                logoSrc={facebookLogo}
                className="button"
                backgroundColor="#1877F2"
                color="#ffffff"
              />
              <Button
                text="Rejoignez-nous Google"
                logoSrc={googleLogo}
                className="button"
                backgroundColor="#FFF"
                color="#000"
              />
            </div>
            <div className="line-with-text">
              <hr className="line" />
              <span className="text">ou</span>
              <hr className="line" />
            </div>
            <div className="form">
              <Input title="Adresse e-mail *" placeholder="exemple@mail.com" />
              <Input title="Nom du compte *" placeholder="Compte" />
              <Input title="Mot de passe *" placeholder="Mot de passe" />
              <p className="passwordSubtitle">
                Votre mot de passe doit contenir au moins 8 caractères, dont au
                moins 1 chiffre, 1 lettre majuscule et 1 lettre minuscule.
              </p>
              <Input
                title="Comfirmation du mot de passe"
                placeholder="Mot de passe"
              />
            </div>
          </div>
          <div className="contactDetails">
            <div className="contactDetailTitle">2. Vos Coordonnées</div>
            <Input title="Nom *" placeholder="Nom" />
            <Input title="Prénom *" placeholder="Prénom" />
            <Input title="Média *" placeholder="Média" />
            <SelectInput
              title="Métier"
              placeholder="Métier"
              options={[
                "Journaliste",
                "Photographe",
                "Reporter",
                "Cadreur",
                "Ingénieur du son",
                "Commentateur",
              ]}
            />
          </div>
          <div className="preferences">
            <div className="preferencesDetailTitle">
              3. Vos préférences de communication
            </div>
            <div className="checkBox">
              <CheckboxLine
                className="checkboxTexte"
                texte="J’ai lu et compris ce document de World Rugby Politique de confidentialité"
                forgot=""
              ></CheckboxLine>
              <CheckboxLine
                className="checkboxTexte"
                texte="J’aimerai que la Coupe du Monde de rugby m’envoie des infos, des renseignements, des promotions et des offres spéciales par courrier électronique"
                forgot=""
              ></CheckboxLine>
            </div>
          </div>
          <div className="sign">
            <div className="signup"></div>
            <Button
              text="Créer un compte"
              logoSrc=""
              className="button"
              backgroundColor="#5BAB2C"
              color="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
