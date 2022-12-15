const IconButton = ({ onClick, btnText, icon, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gossip-dark-06 text-gossip-dark-01 p-2 font-semibold text-xl rounded-md flex items-center gap-2 outline-none justify-center ${
        className ? className : ""
      }`}
    >
      {btnText}
      {icon}
    </button>
  );
};

export default IconButton;
