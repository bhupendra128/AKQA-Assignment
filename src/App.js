import React from "react";
import componentProps from "./assets/data";
import { componentMapping } from "./componentMapping";
import "./App.scss";

const App = () => {
  return (
    <div className="app-wrapper">
      {componentProps.data.map((item) => {
        const { componentName } = item;
        if (componentName && componentMapping[componentName]) {
          const Component = componentMapping[componentName];
          return <Component {...item.fields} key={componentName} />;
        }
        return null;
      })}
    </div>
  );
};

export default App;
