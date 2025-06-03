

const Toast = ({ message}) => {
  return (
    <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 animate-bounce">
      {message}
      {/* <button onClick={onClose} className="ml-3 font-bold">x</button> */}
    </div>
  );
};

export default Toast;