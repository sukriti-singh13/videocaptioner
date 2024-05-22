
import { TToast } from './Toast.types';
const Toast = ({ message, type }: TToast) => {
  if(message === '') return null;
  return (
    <div className={`absolute bottom-10 right-10 text-white rounded-md px-3 text-sm py-2 ${type === 'success' ? 'bg-[#a6d96a]' : 'bg-[#d7191c]'}`}>
      {message}
    </div>
  );
};

export default Toast;
