import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "./layouts/Layout";
import Callback from "./pages/Callback";
import Dashboard from "./pages/Dashboard";
import Instructions from "./pages/Instructions";
import Loading from "./pages/Loading";
import AuthenticationGuard from "./components/AuthenticationGuard";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Instructions />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
