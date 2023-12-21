import personProfileIcon from "../../assets/images/planCard/personProfileIcon.svg";
import peoplePlusProfileIcon from "../../assets/images/planCard/peoplePlusProfileIcon.svg";
import peopleProfileIcon from "../../assets/images/planCard/peopleProfileIcon.svg";
import businessProfileIcon from "../../assets/images/planCard/businessProfileIcon.svg";

export const planCardsArr = [
  {
    developer: false,
    address: "/everyone",
    image: personProfileIcon,
    title: "Everyone",
    price: "$5",
    features: {
      maxSize: "+$1 per additional person",
      limitStorage: "5 GB Max File Size",
      limitFiles: "Unlimited Storage",
      limitDevices: "Unlimited Files",
      people: "Unlimited Devices",
    },
  },
  {
    developer: true,
    address: "/developer",
    image: peoplePlusProfileIcon,
    title: "Developer",
    forWhom: "PAY AS YOU GO",
    price: "$2.5",
    features: {
      maxSize: "Developer API Access",
      limitStorage: "5 GB Max File Size",
      limitFiles: "Unlimited Storage",
      limitDevices: "NO DATA TRANSFER FEES",
      people: "NO HIDDEN FEES",
    },
  },
];
