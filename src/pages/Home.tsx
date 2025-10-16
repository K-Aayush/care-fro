import { Button } from "../components/ui/button";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#fffff7]">
      <div className="flex flex-col items-center justify-center  px-4 pb-32 min-h-screen ">
        <div className="text-6xl font-semibold text-wrap mb-6 max-w-[950px] text-center">
          A Specialty Pharmacy EMR for Providers
        </div>
        <div className="text-3xl text-center mb-10 max-w-[800px]">
          Streamline perscription management , coordinate care, and improbe
          patient outcomes
        </div>
        <Button className="bg-[#01172e]  cursor-pointer px-6 text-xl py-6">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Home;
