import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const ListVideos = props => {
  const [redirect, setRedirect] = useState(null);
  const { location } = props;
  const user = location && location.state && location.state.user;

  useEffect(() => {
    if (!user) {
      setRedirect(<Redirect to="/login" />);
    }
  }, [user]);

  return (
    <React.Fragment>
      <div>Bem vindo, {user}.</div>
      {redirect}
    </React.Fragment>
  );
};

export default ListVideos;
