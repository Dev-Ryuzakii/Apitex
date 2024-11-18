import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { text } from '../text';
import { hooks } from '../hooks';
import { custom } from '../custom';
import { svg } from '../assets/svg';
import { components } from '../components';
import { validatePhoneNumber } from '../utils/validatePhoneNumber';

export const VerifyYourPhoneNumber: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = hooks.useAppNavigate();

  const [phoneNumber, setPhoneNumber] = useState('+17');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      window.scroll({ top: -1, left: 0, behavior: 'smooth' });
    }, 10);
  }, [pathname]);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    setError(null);
  };

  const handleConfirm = () => {
    const isValid = validatePhoneNumber(phoneNumber);
    if (isValid) {
      navigate('/ConfirmationCode', { state: { phoneNumber } });
    } else {
      setError('Please enter a valid phone number.');
    }
  };

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
          textAlign: 'center',
          height: '100vh',
          padding: '0 20px',
          zIndex: 1,
        }}
      >
        <text.H3 style={{ marginBottom: 20 }}>Verify Your Phone Number</text.H3>
        <text.T16 style={{ marginBottom: 20, maxWidth: '400px' }}>
          We will send you an SMS with a code to verify your phone number.
        </text.T16>
        <custom.InputField
          leftIcon={<svg.PhoneSvg />}
          containerStyle={{
            marginBottom: 14,
            width: '100%',
            maxWidth: '400px',
          }}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        {error && (
          <text.T14 style={{ color: 'red', marginBottom: 10 }}>{error}</text.T14>
        )}
        <components.Button
          title="Confirm"
          containerStyle={{
            width: '100%',
            maxWidth: '400px',
            marginBottom: 20,
          }}
          onClick={handleConfirm}
          disabled={!phoneNumber || phoneNumber.length < 4}
        />
      </main>
    );
  };

  return (
    <div
      id="screen"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {renderBackground()}
      <components.Header
        title=""
        goBack={true}
      />
      {renderContent()}
    </div>
  );
};
