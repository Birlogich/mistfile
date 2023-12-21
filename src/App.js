import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Layout } from "./components/Layout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ResultPayment } from "./components/UI/Popups/ResultPayment";
import { Checkout } from "./components/Main/Checkout/Checkout";
import { BucketBlank } from "./components/Bucket/BucketBlank/BucketBlank";
import { Partner } from "./components/Bucket/Partner/Partner";
import { Setting } from "./components/Bucket/Setting/Setting";
import { Billing } from "./components/Bucket/Billing/Billing";
import { Help } from "./components/Bucket/Help/Help";
import { BucketInside } from "./components/Bucket/BucketBlank/BucketInside";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Login } from "./components/Main/Login/Login";
import { FolderInside } from "./components/Bucket/BucketBlank/FolderInside";
import { useEffect } from "react";
import { Compute } from "./components/Bucket/Compute/Compute";
import { SelectType } from "./components/Bucket/Compute/SelectType/SelectType";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function App() {
  const { clientSecret } = useSelector((state) => state.clientSecret);
  const { autorization } = useSelector((state) => state.userAutorization);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  useEffect(() => {
    const getInfo = () => {
      return autorization, clientSecret, localStorage;
    };
    getInfo();
  }, [autorization, clientSecret, localStorage]);

  return (
    <>
      {!clientSecret && (
        <div className="w-full h-full flex flex-col flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="login" element={<Login />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </div>
      )}
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <div className="w-full h-full flex flex-col flex flex-col items-center">
            {!autorization && (
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Main />} />
                  <Route path="login" element={<Login />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route
                    path="completion/:success"
                    element={<ResultPayment />}
                  />
                </Route>
              </Routes>
            )}
            <Routes>
              {autorization && (
                <Route path="/" element={<Layout />}>
                  <Route index element={<BucketBlank />} />
                  <Route path="compute" element={<Compute />} />
                  <Route path="compute/select-type" element={<SelectType />} />
                  <Route path=":id" element={<BucketInside />} />
                  <Route
                    path=":id/folder/:folderId"
                    element={<FolderInside />}
                  />
                  <Route
                    path="completion/:success"
                    element={<ResultPayment />}
                  />
                  <Route path="partner" element={<Partner />} />
                  <Route path="setting" element={<Setting />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="billing" element={<Billing />} />
                  <Route path="help" element={<Help />} />
                </Route>
              )}
            </Routes>
          </div>
        </Elements>
      )}
    </>
  );
}

export default App;
