import { Link } from "react-router-dom";
import Button from "../../component/button/button";
import Input from "../../component/formInput/formInput";
import styled from "styled-components";

const App = styled.div`
  display: flex;
  height: 100vh;
`;

const WhiteSection = styled.div`
  width: 40%;
  background-color: #fff;
`;

const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const GradientSection = styled.div`
  flex-grow: 1;
  background: linear-gradient(135deg, #2a37e6, #64be46);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  color: #ffffff;
  text-align: center;
  position: absolute;
  width: 415px;

  h1 {
    font-size: 24px;
    margin: 0px;
  }

  p {
    font-size: 16px;
  }
`;

const ContentSubtitle = styled.p`
  font-size: 16px;
`;

const WrapperSubscribe = styled.div`
  color: #fff;
  text-underline-offset: 4px;
  text-decoration-thickness: 0.8px;
  margin-top: -20px;
  margin-left: 4px;
`;

const Logo = styled.img`
  height: 375px;
  width: auto;
`;

const GradientLogo = styled.img`
  position: absolute;
  top: 30px;
  right: 40px;
  width: 125px;
  height: auto;
`;

const Helper = styled.h3`
  margin: 30px 0px 0px 0px;
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LineWithText = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  gap: 10px;

  hr {
    flex-grow: 1;
    border: none;
    border-top: 0.8px solid #fff;
  }

  span {
    padding: 0 10px;
  }
`;

const ConnexionForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

function HomePage() {
  return (
    <App>
      <WhiteSection>
        <CenteredContent>
          <Logo src="/assets/logo-title.png" alt="Logo" />
        </CenteredContent>
      </WhiteSection>
      <GradientSection>
        <GradientLogo src="/assets/rugby-petit.svg" alt="Nouveau logo" />
        <Content>
          <h1>Content de vous revoir</h1>
          <ContentSubtitle>
            Vous n’avez pas de compte ?
            <WrapperSubscribe>
              <Link to="/visitors/signup" className="subscribe">
                S'inscrire
              </Link>
            </WrapperSubscribe>
          </ContentSubtitle>
          <Helper className="h3">
            Connectez-vous à l'aide de votre réseau social
          </Helper>
          <ButtonWrapper>
            <Button
              text="Rejoignez-nous Apple"
              logoSrc="/src/assets/appleWhiteLogo.svg"
              className="button"
              backgroundColor="#000"
              color="#ffffff"
            />
            <Button
              text="Rejoignez-nous Facebook"
              logoSrc="/assets/facebookLogo.svg"
              className="button"
              backgroundColor="#1877F2"
              color="#ffffff"
            />
            <Button
              text="Rejoignez-nous Google"
              logoSrc="/assets/googleLogo.svg"
              className="button"
              backgroundColor="#FFF"
              color="#000"
            />
          </ButtonWrapper>
          <LineWithText>
            <hr />
            <span className="text">ou</span>
            <hr />
          </LineWithText>
          <ConnexionForm>
            <Input
              title="Nom d’utilisateur ou e-mail"
              placeholder="exemple@mail.com"
            />
            <Input title="Mot de passe" placeholder="Mot de passe" />
            <Link to="/visitors/welcomePage" className="welcomePage">
              <Button
                text="Connexion"
                logoSrc=""
                className="button"
                backgroundColor="#5BAB2C"
                color="#fff"
              />
            </Link>
          </ConnexionForm>
        </Content>
      </GradientSection>
    </App>
  );
}

export default HomePage;
