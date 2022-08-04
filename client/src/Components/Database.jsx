import React from "react";
import { database, databaseTitle } from "../constants";

function Database() {
  return (
    <div className="databaseContainer">
      <div className="sharedSubTitle">{databaseTitle}</div>
      <div className="databaseItemContainer">
        {database.map((item) => (
          <div className="databaseItem" key={item.id}>
            <div className="databaseIcon">{item.icon}</div>
            <div className="databaseTitle">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Database;
