import React from "react";
import { Flex, Spin } from "antd";
import "./loder.scss";

const Loder = (props) => {
  return (
    <>
      {props.showLoader && (
        <Flex className="loder" align="center" gap="middle">
          <Spin size="large" />
        </Flex>
      )}
    </>
  );
};

export default Loder;
