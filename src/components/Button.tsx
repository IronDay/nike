type Props = {
  label: string;
  iconUrl?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
};

const Button = ({
  label,
  iconUrl,
  bgColor,
  textColor,
  borderColor,
  fullWidth,
}: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border
                   font-montserrat text-lg leading-none rounded-full
                  ${bgColor ? bgColor : "bg-coral-red"} 
                  ${textColor ? textColor : "text-white"} ${
                    borderColor ? borderColor : "border-coral-red"
                  } ${fullWidth && "w-full"}`}
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
