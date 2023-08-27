type Props = {
  label: string;
  iconUrl?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
};

const Button = ({ label, iconUrl, bgColor, textColor, borderColor }: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border
    font-montserrat text-lg leading-normal
     ${bgColor ? bgColor : "bg-coral-red"} rounded-full ${
       textColor ? textColor : "text-white"
     } ${borderColor ? borderColor : "border-coral-red"}`}
    >
      {label}
      {iconUrl && (
        <img
          className="ml-2 rounded-full w-5 h-5"
          src={iconUrl}
          alt="arrow right"
        />
      )}
    </button>
  );
};
export default Button;
