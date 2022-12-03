const InputBox = ({ type, name, id, label, placeholder, inputError }) => {
  return (
    <div className='mb-2'>
      {label && (
        <label
          htmlFor={id}
          className='text-lg text-gossip-color-01 font-medium'
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className='w-full outline-none bg-transparent border border-gossip-color-01 rounded-sm p-2'
      />
      {inputError && <span>{inputError}</span>}
    </div>
  );
};

export default InputBox;
