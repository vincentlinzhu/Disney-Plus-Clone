import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

const Login = (prop) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          {!userName ? (
            <SignUp onClick={handleAuth}>GET ALL THERE</SignUp>
          ) : (
            <></>
          )}
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 3/26/21, the price of Disney+ and
            The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImg />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  bpx-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px, 40px;
  height: 100%;
`;

const BgImg = styled.div`
  height: 100%;
  backgorund-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpeg");
  position: absolute;
  top:0;
  right 0;
  left: 0;
  bottom: 0;
  z-index:-1;
`;

const CTA = styled.div`
  //   margin-bottom: 2vw;
  //   max-width: 650px;
  //   flex-wrap: wrap;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   margin-top: 0;
  //   align-item: center;
  //   text-align: center;
  //   margin-right: auto;
  //   margin-left: auto;
  //   transition-timing-function: ease-out;
  //   transition: opacity 0.2s;
  //   width: 100%;
  max-width: 750px;
  margin-top: 2vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 28px;
  max_width: 600px;
  min-height: 1px;
  display: block;
  //width: 100%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const SignUp = styled.a`
  //font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 20px;
  //width: 100%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 1.5px;
  font-size: 20px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 12px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 0;
  display: inline-block;
  vertical-align: bottom;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

export default Login;
