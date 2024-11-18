import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {text} from '../text';
import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';

export const SignUp: React.FC = () => {
  const {pathname} = useLocation();
  const navigate = hooks.useAppNavigate();

  useEffect(() => {
    setTimeout(() => {
      window.scroll({top: -1, left: 0, behavior: 'smooth'});
    }, 10);
  }, [pathname]);

  const renderBackground = (): JSX.Element => {
    return <components.Background />;
  };

  const renderContent = (): JSX.Element => {
    return (
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '0 20px',
          zIndex: 1,
          width: '100%',
        }}
      >
        <text.H1 style={{marginBottom: 30}}>Sign up!</text.H1>
        <custom.InputField
          leftIcon={<svg.UserSvg />}
          containerStyle={{
            marginBottom: 10,
            width: '100%',
            maxWidth: '400px',
          }}
          placeholder='Enter your full name'
        />
        <custom.InputField
          leftIcon={<svg.EmailSvg />}
          containerStyle={{
            marginBottom: 10,
            width: '100%',
            maxWidth: '400px',
          }}
          placeholder='Enter your email address'
        />
        <custom.InputField
          leftIcon={<svg.KeySvg />}
          rightIcon={<svg.EyeOffSvg />}
          containerStyle={{
            marginBottom: 10,
            width: '100%',
            maxWidth: '400px',
          }}
          placeholder='Create a password'
        />
        <custom.InputField
          leftIcon={<svg.KeySvg />}
          rightIcon={<svg.EyeOffSvg />}
          containerStyle={{
            marginBottom: 14,
            width: '100%',
            maxWidth: '400px',
          }}
          placeholder='Confirm Password'
        />
        <components.Button
          title='Sign up'
          containerStyle={{
            marginBottom: 14,
            width: '100%',
            maxWidth: '400px',
          }}
          onClick={() => navigate('/VerifyYourPhoneNumber')}
        />
          <div style={{ marginTop: 20, textAlign: 'center' }}>
          <text.T16 style={{ marginRight: 4 }}>Already have an account?</text.T16>
          <text.T16
            onClick={() => navigate('/SignIn')}
            style={{ cursor: 'pointer', color: theme.colors.mainColor, marginLeft:60 }}
          >
            Sign in.
          </text.T16>
        </div>
      </main>
    );
  };

  return (
    <div
      id='screen'
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {renderBackground()}
      <components.Header goBack={true} />
      {renderContent()}
    </div>
  );
};
