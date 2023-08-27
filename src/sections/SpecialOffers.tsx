import { Button } from "../components";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
  return (
    <section
      className="flex justify-wrap 
    items-center max-xl:flex-col-reverse 
    gap-10 max-container
    "
    >
      <div className="flex-1">
        <img
          className="object-contain w-full"
          src={offer}
          alt="offer"
          width={773}
          height={687}
        />
      </div>
      <div>
        <h2
          className="font-palanquin text-4xl capitalize
           max-sm:text-[72px] font-bold lg:max-w-lg"
        >
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            bgColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-coral-red"
          />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffers;
