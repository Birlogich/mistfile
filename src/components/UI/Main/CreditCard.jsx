import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { AverageButton } from "./AverageButton";
import { client } from "../../../API/client";
import { useSelector } from "react-redux";

const cardTitleStyle =
  "font-[600] text-[14px] leading-[16px] text-black text-center border-black border-solid border-b-[1px] pb-[6px] max-w-[91px] mb-[42px]";

const cardFormStyle =
  "flex flex-col text-[16px] font-[400] text-black items-center w-full max-w-[552px]";

export const CreditCard = ({ addNewPayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { apikey, subscription } = useSelector((state) => state.verifyUser);

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { clientSecret } = useSelector((state) => state.clientSecret);

  const startButtonProps = {
    background: "bg-black",
    title: `${isLoading ? "Processing..." : "Start Now"}`,
    paddingY: "py-[16px]",
    maxWidth: "max-w-[141px]",
    textColor: "text-white",
    borderRadius: "rounded-[5px]",
  };

  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [clientSecret]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (subscription.length < 1) {
      client("accounts/subscribe/", {
        body: {
          subscriptionType: "developer",
        },
        headers: { "x-api-key": apikey },
      }).then((res) => {
        console.log(res);
      });
    }
    setIsLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:3000/completion/succeeded`,
      },
    });

    if (result.error) {
      console.log(result.error.message);
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <>
      {clientSecret && (
        <div className="flex flex-col bg-[#F9F9F9] items-center w-full">
          <div
            className={`flex flex-col bg-white max-w-[935px] w-full rounded-[25px] ${
              addNewPayment ? "" : "p-[40px]"
            } justify-center items-center `}
          >
            <p className={cardTitleStyle}>Credit Card</p>

            <form
              className={cardFormStyle}
              id="payment-form"
              onSubmit={handleSubmit}
            >
              <PaymentElement
                id="payment-element"
                options={paymentElementOptions}
                className="w-full mb-[30px]"
              ></PaymentElement>
              <AverageButton {...startButtonProps} />
            </form>
          </div>
        </div>
      )}
    </>
  );
};
