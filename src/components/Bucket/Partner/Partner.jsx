import { useEffect, useState } from "react";
import { CurrentBalans } from "../../UI/Bucket/Partner/CurrentBalans";
import { InviteFriends } from "../../UI/Bucket/Partner/InviteFriends";
import { BucketHeader } from "../BucketHeader/BucketHeader";
import { ContactCustomer } from "../../UI/Popups/ContactCustomer";
import { useGetReferralBalance } from "../../../customHooks/useGetReferralBalance";
import { useTheme } from "../../../features/theme/use-theme";

export const Partner = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [theme] = useTheme();
  const [userBalans] = useGetReferralBalance();

  useEffect(() => {
    if (showContactPopup) {
      setTimeout(() => {
        setShowContactPopup(false);
      }, 3000);
    }
  }, [showContactPopup]);

  return (
    <div
      className={`text-black w-full px-[40px] flex items-center flex-col ${
        theme === "dark" ? "bg-[#1B1F27]" : ""
      }`}
    >
      <BucketHeader />
      <div className="flex w-full justify-start mb-[32px]">
        <h2
          className={`text-poppins text-[24px] font-[600] ${
            theme === "dark" ? "text-[#92929D]" : "text-white"
          }`}
        >
          Refer
        </h2>
      </div>
      <InviteFriends />
      <CurrentBalans
        onClick={() => setShowContactPopup(true)}
        userBalans={userBalans}
      />
      {showContactPopup && (
        <ContactCustomer onClick={() => setShowContactPopup(false)} />
      )}
    </div>
  );
};
