import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {text} from '../text';
import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';

export const SignIn: React.FC = () => {
  const {pathname} = useLocation();
  const location = useLocation();
  const navigate = hooks.useAppNavigate();
  const [rememberMe, setRememberMe] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      window.scroll({top: -1, left: 0, behavior: 'smooth'});
    }, 10);
  }, [pathname]);

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (location.pathname.includes('Onboarding')) {
      metaThemeColor?.setAttribute('content', '#040325');
    } else {
      metaThemeColor?.setAttribute('content', '#ffffff');
    }
  }, [location]);

  const renderBackground = (): JSX.Element => {
    return <components.Background />;
  };

  const renderContent = (): JSX.Element => {
    return (
      <main
        className='container'
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
        <text.H1 style={{marginBottom: 30}}>Welcome Back!</text.H1>
        <custom.InputField
          leftIcon={<svg.EmailSvg />}
          rightIcon={<svg.CheckSvg />}
          containerStyle={{
            marginBottom: 10,
            width: '100%',
            maxWidth: '400px',
          }}
          placeholder='Enter your email address'
        />
        <custom.InputField
          placeholder='Enter your password'
          clickable={true}
          leftIcon={<svg.PasswordSvg />}
          rightIcon={<svg.EyeOffSvg />}
          containerStyle={{
            marginBottom: 14,
            width: '100%',
            maxWidth: '400px',
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '400px',
            marginBottom: 30,
          }}
        >
          {/* Remember me */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => setRememberMe(!rememberMe)}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 4,
                ...utils.flexCenter(),
                border: `1px solid ${theme.colors.mainColor}`,
              }}
            >
              {rememberMe && <svg.InputCheckSvg />}
            </div>
            <text.T16 style={{marginLeft: 12}}>Remember me</text.T16>
          </button>
          {/* Forgot password */}
          <text.T16
            onClick={() => navigate('/ForgotPassword')}
            style={{cursor: 'pointer', color: theme.colors.mainColor}}
          >
            Lost your password?
          </text.T16>
        </div>
        <components.Button
          title='Sign In'
          containerStyle={{
            marginBottom: 14,
            width: '100%',
            maxWidth: '400px',
          }}
          onClick={() => navigate('/TabNavigator')}
        />
        <div style={{marginBottom: 40}}>
          <text.T16 style={{marginRight: 4}}>No account?</text.T16>
          <text.T16
            onClick={() => navigate('/SignUp')}
            style={{cursor: 'pointer', color: theme.colors.mainColor}}
          >
            Register now
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
      {renderContent()}
    </div>
  );
};
