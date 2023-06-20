import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product";
import { useState } from "react";

import { Phones, Laptop, Desktop, Tablet, Accessory } from "./data";
let data = {
  phones: Phones,
  laptop: Laptop,
  desktop: Desktop,
  tablet: Tablet,
  accessory: Accessory,
};

function App() {
  //  this is for changing class of navbar items
  const [active, setActive] = useState([
    {
      id: 1,
      status: "NavItem Active",
    },
    {
      id: 2,
      status: "NavItem",
    },
    {
      id: 3,
      status: "NavItem",
    },
    {
      id: 4,
      status: "NavItem",
    },
    {
      id: 5,
      status: "NavItem",
    },
    {
      id: 6,
      status: "NavItem",
    },
  ]);

  //  this function takes care of changing class
  const filterHandler = (item) => {
    if (item === "all") {
      // make a copy of state
      const state = [...active];
      // loop through state and change class of selected item to Active and deactive others
      const nextState = state.filter((state) => {
        if (state.id !== 1) {
          state.status = "NavItem";
        } else {
          state.status = "NavItem Active";
        }
        data = { phones: Phones, laptop: Laptop, desktop: Desktop, tablet: Tablet, accessory: Accessory };
        return { state, data };
      });
      // change state using result state
      setActive(nextState);
    } else if (item === "laptop") {
      const state = [...active];
      const nextState = state.filter((state) => {
        if (state.id !== 2) {
          state.status = "NavItem";
        } else {
          state.status = "NavItem Active";
        }
        data = { laptop: Laptop };
        return { state, data };
      });
      setActive(nextState);
    } else if (item === "phone") {
      const state = [...active];
      const nextState = state.filter((state) => {
        if (state.id !== 3) {
          state.status = "NavItem";
        } else {
          state.status = "NavItem Active";
        }
        data = { phones: Phones };
        return { state, data };
      });
      setActive(nextState);
    } else if (item === "desktop") {
      const state = [...active];
      const nextState = state.filter((state) => {
        if (state.id !== 4) {
          state.status = "NavItem";
        } else {
          state.status = "NavItem Active";
        }
        data = { desktop: Desktop };
        return { state, data };
      });
      setActive(nextState);
    } else if (item === "tablet") {
      const state = [...active];
      const nextState = state.filter((state) => {
        if (state.id !== 5) {
          state.status = "NavItem";
        } else {
          state.status = "NavItem Active";
        }
        data = { tablet: Tablet };
        return { state, data };
      });
      setActive(nextState);
    } else if (item === "accessory") {
      const state = [...active];
      const nextState = state.filter((state) => {
        if (state.id !== 6) {
          state.status = "NavItem";
        } else {
          state.status = "NavItem Active";
        }
        data = { accessory: Accessory };
        return { state, data };
      });
      setActive(nextState);
    }
  };
  return (
    <>
      <Navbar filterHandler={filterHandler} active={active} />
      <Product data={data} />
    </>
  );
}

export default App;
