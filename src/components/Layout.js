import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 85px;
`;

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Wrap>{children}</Wrap>
    </>
  );
}
