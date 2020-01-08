import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { useStores } from 'HiitTimer/src/stores/hooks';
import { StartCountdown } from '../components';

// FIXME:
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// https://stackoverflow.com/questions/55726218/react-hooks-mobx-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body
const StartCountdownContainer = observer(props => {
  const { session } = useStores();
  const { goToHome } = props;
  const { startCountdown } = session;
  const [currentCount, setCurrentCount] = useState(startCountdown);

  useEffect(() => {
    const timer = () => {
      if (currentCount > 0) {
        setCurrentCount(currentCount - 1);
      }

      if (currentCount < 1) {
        goToHome();
      }
    };
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [currentCount, goToHome]);

  return <StartCountdown currentCount={currentCount} />;
});

export default StartCountdownContainer;

StartCountdownContainer.propTypes = {
  goToHome: PropTypes.func.isRequired,
};
