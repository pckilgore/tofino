import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const PurpleBox = styled.div`
  height: 500px;
  width: 500px;
  background-color: purple;
`;

export const MyComponent = ({ message }) => (
  <PurpleBox>
    <p>{`I'm a transpiled, imported component`}</p>
    <br />
    <p>Your name is: {message}</p>
  </PurpleBox>
);

MyComponent.propTypes = {
  message: PropTypes.string
};

export default MyComponent;
