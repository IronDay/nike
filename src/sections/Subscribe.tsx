import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container
                flex justify-between
                 items-center gap-10
                 max-lg:flex-col"
    >
      <h3
        className="text-4xl leading-[68px]
      lg:max-w-md font-palanquin font-bold"
      >
        Sign up for <span className="text-coral-red">Updates </span>& Newsletter
      </h3>

      {/*TODO:fix the button responsiveness in small*/}

      <div
        className="lg:max-w-[40%] w-full
      flex items-center max-sm:flex-col gap-5 p-2.5 sm:border
      sm:border-slate-gray rounded-full"
      >
        <input placeholder="subscribe" className="input" type="text" />
        <span className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" />
        </span>
      </div>
    </section>
  );
};
export default Subscribe;
