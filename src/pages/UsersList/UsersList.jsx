import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setActivePage, setHeaderTitle } from "../../components/react-redux/action";

const UsersList = (props) => {
  useEffect(() => {
    props.setHeaderTitle("User Lists");
    props.setActivePage("userList")
    return () => {
      props.setHeaderTitle("User Lists");
    };
  }, []);

  return <div>Testing</div>;
};

const mapStateToProps = (state) => ({
  headerTitle: state.headerTitle,
});

const mapDispatchToProps = (dispatch) => ({
  setHeaderTitle: (data) => dispatch(setHeaderTitle(data)),
  setActivePage: (data)=>dispatch(setActivePage(data)),
});

// export default UsersList
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
