import { Button } from "../../components/ui/button";
import { authButtons } from "../../lib/data";
import caredeviBrand from "../../assets/caredeviBrand.png";
import mittus from "../../assets/mittus.png";

const SelectPage = () => {
  return (
    <div className="bg-[#fffdf4] min-h-screen relative">
      <main className="flex flex-col items-center justify-center">
        <img
          className="mt-12 w-sm h-52 object-cover"
          alt="CareDevi Brand"
          src={caredeviBrand}
        />

        <div className="flex flex-col space-y-3 mt-8 w-full px-4 max-w-lg">
          {authButtons.map((button) => (
            <Button
              key={button.id}
              variant={button.variant}
              className={`w-full h-[74px] text-2xl ${button.className}`}
            >
              {button.icon && button.id === "google" && (
                <img
                  className="w-[38px] h-[34px] mr-3"
                  alt="Google icon"
                  src={button.icon}
                />
              )}
              {button.icon && button.id === "apple" && (
                <img
                  className="w-[38px] h-[45px] mr-3 object-cover"
                  alt="Apple icon"
                  src={button.icon}
                />
              )}
              {button.icon && button.id === "mail" && (
                <img
                  className="w-[38px] h-[45px] mr-3 object-cover"
                  alt="Apple icon"
                  src={button.icon}
                />
              )}
              {button.text}
            </Button>
          ))}
        </div>

        <footer className="flex items-center gap-[7px] mt-[21px]">
          <p className="[font-family:'Instrument_Sans',Helvetica] font-medium text-black text-[27px] tracking-[0] leading-[normal]">
            CareDevi is HITRUST <br />
            and SOC2 certified
          </p>
          <img
            className="w-[77px] h-[73px] object-cover"
            alt="HITRUST SOC2 Certification"
            src={mittus}
          />
        </footer>
      </main>
    </div>
  );
};

export default SelectPage;
