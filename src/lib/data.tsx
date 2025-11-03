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
    link: "/login-select",
  },
  {
    id: "apple",
    text: "Continue with Apple",
    variant: "default" as const,
    className:
      "bg-[#1b1515] hover:bg-[#1b1515]/90 text-white font-semibold cursor-pointer",
    icon: apple,
    link: "/login-select",
  },
  {
    id: "mail",
    text: "Continue with Email",
    variant: "outline" as const,
    className:
      "bg-[#fffff7] border-black hover:bg-[#fffff7]/90 text-black font-semibold cursor-pointer",
    icon: mail,
    link: "/login",
  },
];

export const dailyListData = [
  {
    mrn: "100200",
    patient: "Emma Curtis",
    status: "Active",
    diagnosis: "Rheumatoid",
    dob: "06/13/1951",
  },
  {
    mrn: "100199",
    patient: "James Smith",
    status: "Active",
    diagnosis: "Psoriasis",
    dob: "01/15/1963",
  },
  {
    mrn: "100104",
    patient: "Olivia Jones",
    status: "Active",
    diagnosis: "Asthama",
    dob: "10/23/1989",
  },
  {
    mrn: "100087",
    patient: "Brian Kim",
    status: "Active",
    diagnosis: "Crohn´s",
    dob: "08/30/1978",
  },
];

export const messages = [
  {
    id: 1,
    name: "Sarah Choi",
    message: "Please submit the lab results when available",
    time: "2h ago",
    unread: true,
  },
  {
    id: 2,
    name: "Robert Young",
    message: "Insurance approval has been received",
    time: "5h ago",
    unread: false,
  },
];
