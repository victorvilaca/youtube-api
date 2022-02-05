import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../layout/views/Layout";

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
    <Layout showHeader>
      <div style={styles.content}>Aqui é o conteúdo</div>
      {redirect}
    </Layout>
  );
};

const styles = {
  content: {
    marginTop: "10px"
  }
};

export default ListVideos;
