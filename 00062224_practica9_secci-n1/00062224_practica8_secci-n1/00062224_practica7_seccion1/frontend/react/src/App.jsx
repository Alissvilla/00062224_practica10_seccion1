import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Protected from "./Protected.jsx";
import SalesForm from "./Components/SalesForm.jsx";
import CustomersTable from "./Components/CustomersList.jsx";
import SalesList from "./Components/SalesList.jsx";
import SalesReport from "./Components/SalesReport.jsx";
import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/protected" element={<Protected />} />
      <Route path="/customers" element={<CustomersTable />} />
      <Route path="/sales" element={<SalesForm />} />
      <Route path="/salesList" element={<SalesList />} />
      <Route path="/salesReport" element={<SalesReport />} />
    </Routes>
  </Router>
);

export default App;
