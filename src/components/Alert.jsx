import { useEffect } from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
  const name = props.name;
  const closeAlert = props.closeAlert;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
  return (
    <div id='toast-container'>
      <div className='toast'>{name}</div>
    </div>
  );
}

Alert.propTypes = {
  name: PropTypes.string.isRequired,
  closeAlert: PropTypes.func.isRequired,
};

export default Alert;
