import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NamePerson from "./NamePerson";
import PersonDetail from "./PersonDetail"; 
import PeopleList from "./PeopleList";
import PeopleTable from "./PeopleTable";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson />
    <PersonDetail /> 
    <PeopleList />
    <PeopleTable/>
  </React.StrictMode>
  
);

reportWebVitals();
