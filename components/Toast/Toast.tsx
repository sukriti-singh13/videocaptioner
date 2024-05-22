
import { TToast } from './Toast.types';
const Toast = ({ message, type }: TToast) => {
  if(message === '') return null;
  return (
    <div className={`absolute bottom-10 right-10 text-white rounded-md px-3 text-sm py-2 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
      {message}
    </div>
  );
};

export default Toast;
