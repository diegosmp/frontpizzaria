const Button = ({ title }) => {
  return (
    <button className="border border-zinc-300 py-2 px-8 rounded font-semibold cursor-pointer">
      {title}
    </button>
  );
};

export default Button;
