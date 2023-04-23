const CustomButton = ({ onClick, textContent, textSize }) => {
  return (
    <button onClick={onClick} className="border border-teal-800 hover:border-teal-600 rounded py-2 px-4 bg-transparent font-bold text-teal-800 hover:text-teal-600 transition duration-500">
      <span className={`button__text ${textSize}`}>{textContent}</span>
    </button>
  );
};

CustomButton.defaultProps = {
  textSize: `text-lg`,
};

export default CustomButton;
