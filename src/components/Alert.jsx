import { useEffect } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context';

function Alert() {
  const { alertName, closeAlert } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alertName]);
  return (
    <div id='toast-container'>
      <div className='toast'>{alertName}</div>
    </div>
  );
}

export default Alert;
