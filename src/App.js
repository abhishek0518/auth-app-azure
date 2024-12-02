import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Header from "./shared/components/header/Header";
import Home from "./features/home/Home";
import Insights from "./features/insights/Insights";
import Individuals from "./features/individuals/Individuals";
import CustomerIntelligence from "./features/customerIntelligence/CustomerIntelligence";
import SearchResults from "./features/search-results/SearchResults";
import ContactUs from "./features/contact-us/ContactUs";
import {
  AuthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "./authConfig";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";
  const isIndividualsPage = location.pathname === "/individuals";

  const { instance, accounts } = useMsal();

  console.log(process.env);

  const handleLogin = async () => {
    instance.handleRedirectPromise().then(()=>{
      const account = instance.getActiveAccount();
      if(!account){ 
        instance.loginRedirect(loginRequest);   
      }
    }).catch(err=>{
      console.log(err);
    });
  };

  useEffect(() => {
    console.log(accounts[0])
    if (!accounts[0]) {
      console.info("Logged in as: ", accounts[0]);
      handleLogin();
    }
  }, []);

  return (
    <AuthenticatedTemplate>
      <div
        className={`app-wrapper ${isHomePage ? "home-wrapper" : ""} ${
          isIndividualsPage ? "individuals-wrapper" : ""
        }`}
      >
        <div className="app-wrapper__header">
          <header>
            <Header />
          </header>
        </div>
        <div className="app-wrapper__body-wrap">
          <div className="app-wrapper__body-wrap__features">
            <article>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/individuals" element={<Individuals />} />
                <Route
                  path="/customer-intelligence"
                  element={<CustomerIntelligence />}
                />
                <Route
                  path="/individuals/search-results"
                  element={<SearchResults />}
                />
                <Route path="/contact-us" element={<ContactUs />} />
              </Routes>
            </article>
          </div>
        </div>
      </div>
    </AuthenticatedTemplate>
  );
}

export default App;
