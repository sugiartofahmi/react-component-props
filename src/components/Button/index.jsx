const button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-bold text-center bg-gray-400 border-solid border-2 border-black py-2 px-3 rounded-lg"
    >
      {text}
    </button>
  );
};

export default button;
