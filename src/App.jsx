import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { PageLayout } from "./components/PageLayout";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useIsAuthenticated,
  useMsal,
} from "@azure/msal-react";
import Button from "react-bootstrap/Button";
import { loginRequest } from "./authConfig";
import { callMsGraph } from "./graph";
import { ProfileData } from "./components/ProfileData";
import { fullAccessGrpId, graphDataConstant } from "./constants";

/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */
const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  function RequestProfileData() {
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        const groups = response?.idTokenClaims["groups"] || [];
        if (groups.includes(fullAccessGrpId)) {
          callMsGraph(response.accessToken).then((response) =>
            setGraphData(response)
          );
        } else {
          setGraphData(graphDataConstant);
        }
      });
  }

  return (
    <center>
      <h5 className="card-title">Welcome {accounts[0].name}</h5>
      <br />
      {graphData ? (
        <ProfileData graphData={graphData} />
      ) : (
        <Button variant="primary" onClick={RequestProfileData}>
          Request Profile Information
        </Button>
      )}
    </center>
  );
};

export default function App() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  };

  useEffect(() => {
    if (!isAuthenticated) {
      handleLogin();
    }
  }, []);

  return (
    <AuthenticatedTemplate>
      <PageLayout>
        <ProfileContent />
      </PageLayout>
    </AuthenticatedTemplate>
  );
}
