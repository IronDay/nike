type Props = {
  label: string;
  iconUrl: string;
};

const Button = ({ label, iconUrl }: Props) => {
  return (
    <button
      className="flex justify-center items-center gap-2 px-7 py-4 border
    font-montserrat text-lg leading-normal
     bg-coral-red rounded-full text-white border-coral-red
    "
    >
      {label}
      <img
        className="ml-2 rounded-full w-5 h-5"
        src={iconUrl}
        alt="arrow right"
      />
    </button>
  );
};
export default Button;
