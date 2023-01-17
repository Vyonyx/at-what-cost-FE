import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Instructions from "./pages/Instructions";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
