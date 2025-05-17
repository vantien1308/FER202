import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NamePerson from "./NamePerson";
import PersonDetail from "./PersonDetail"; 
import PeopleList from "./PeopleList";
import PeopleTable from "./PeopleTable";
<<<<<<< HEAD
=======
import FirstTeenager from "./FirstTeenager";
import AreAllTeenagers from "./AreAllTeenagers";
import SortedPeople from "./SortedPeople";
import GroupByOccupation from "./GroupByOccupation";
import OldestYoungest from "./OldestYoungest";
import AverageAgeByOccupation from "./AverageAgeByOccupation";
>>>>>>> dda28bf (update)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson />
    <PersonDetail /> 
    <PeopleList />
    <PeopleTable/>
<<<<<<< HEAD
=======
    <FirstTeenager/>
    <AreAllTeenagers/>
    <SortedPeople/>
    <GroupByOccupation/>
    <OldestYoungest/>
    <AverageAgeByOccupation/>
>>>>>>> dda28bf (update)
  </React.StrictMode>
  
);

reportWebVitals();
