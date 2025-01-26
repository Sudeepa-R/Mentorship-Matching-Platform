import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AppLayout from "../../dashboard/AppLayout/Layout";
import { connect } from "react-redux";
import { setHeaderTitle } from "../../components/react-redux/action";

const NotFound = () => {
  useEffect(() => {
    setHeaderTitle("Page Not Found");
    return () => {
      setHeaderTitle("Page Not Found");
    };
  }, []);

  return (
    // <AppLayout Heading="Page Not Found">
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "3em", marginBottom: "20px" }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: "1.5em", marginBottom: "30px" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/AppMenuManagement"
        style={{
          padding: "10px 20px",
          fontSize: "1em",
          borderRadius: "5px",
          backgroundColor: "#4CAF50",
          color: "white",
          textDecoration: "none",
        }}
      >
        Go to Home
      </Link>
    </div>
    // </AppLayout>
  );
};

const mapStateToProps = (state) => ({
  headerTitle: state.headerTitle,
});

const mapDispatchToProps = (dispatch) => ({
  setHeaderTitle: (data) => dispatch(setHeaderTitle(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
