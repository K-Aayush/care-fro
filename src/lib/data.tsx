import google from "../assets/googleLogo.png";
import apple from "../assets/appleLogo.png";
import mail from "../assets/mail.png";

export const authButtons = [
  {
    id: "google",
    text: "Continue with Google",
    variant: "outline" as const,
    className:
      "bg-[#fffff7] border-black hover:bg-[#fffff7]/90 text-black font-semibold cursor-pointer",
    icon: google,
  },
  {
    id: "apple",
    text: "Continue with Apple",
    variant: "default" as const,
    className:
      "bg-[#1b1515] hover:bg-[#1b1515]/90 text-white font-semibold cursor-pointer",
    icon: apple,
  },
  {
    id: "mail",
    text: "Continue with Email",
    variant: "outline" as const,
    className:
      "bg-[#fffff7] border-black hover:bg-[#fffff7]/90 text-black font-semibold cursor-pointer",
    icon: mail,
  },
];
