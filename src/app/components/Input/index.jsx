const Input = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-zinc-700 py-2 px-3 text-sm"
      required
    />
  );
};

export default Input;
