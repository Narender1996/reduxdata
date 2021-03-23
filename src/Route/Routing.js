import React from "react";
import { Switch, Route } from "react-router-dom";
import { SignupContainer } from "../Content/Signup/SignupComponent/Container";
import { UserContainer } from "../Content/User/UserComponent/Container";
function Routing() {
  return (
    <div>
      <Switch>
        <Route path="/signup">
          <SignupContainer />
        </Route>
        <Route path="/user">
          <UserContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default Routing;
