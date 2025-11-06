import { Button } from "../../components/ui/button";
import { authButtons } from "../../lib/data";
import caredeviBrand from "../../assets/caredeviBrand.png";
import mittus from "../../assets/mittus.png";
import { useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import { useEffect } from "react";
import { initializeFirebase } from "../../lib/firebase/config";

const SelectPage = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, signInWithApple, isLoading, error } =
    useFirebaseAuth();

  useEffect(() => {
    initializeFirebase();
  }, []);

  const handleButtonClick = (buttonId: string) => {
    if (buttonId === "google") {
      signInWithGoogle();
    } else if (buttonId === "apple") {
      signInWithApple();
    } else if (buttonId === "mail") {
      navigate("/login");
    }
  };

  return (
    <div className="bg-[#fffdf4] min-h-screen relative">
      <main className="flex flex-col items-center justify-center">
        <img
          className="mt-12 w-sm h-52 object-cover"
          alt="CareDevi Brand"
          src={caredeviBrand}
        />

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md max-w-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <div className="flex flex-col space-y-3 mt-8 w-full px-4 max-w-lg">
          {authButtons.map((button) => (
            <Button
              key={button.id}
              variant={button.variant}
              className={`w-full h-[74px] text-2xl ${button.className}`}
              onClick={() => handleButtonClick(button.id)}
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
              {isLoading && button.id !== "mail"
                ? "Signing in..."
                : button.text}
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
