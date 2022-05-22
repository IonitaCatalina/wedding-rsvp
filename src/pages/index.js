import { graphql, useStaticQuery } from "gatsby";
import moment from "moment";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import { useCountdown } from "../components/hooks/useCountdown";

const Date = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  > div {
    font-family: "Crimson Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 89px;
    text-align: center;
    min-height: 89px;
    width: 100%;
  }
  > span {
    font-family: "Work Sans";
    font-size: 30px;
    line-height: 35px;
    text-align: center;
  }
`;

const DateCluster = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 73px;
`;

const MaxWidth = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  min-height: 100%;
`;

const BannerOne = styled.div`
  background: #f2f6f3;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  > div {
    > span {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 300;
      font-size: 40px;
      line-height: 47px;
      text-align: center;
      margin-top: 83px;
      margin-bottom: 44px;
    }
    > h1 {
      font-weight: 700;
      font-size: 120px;
      line-height: 133px;
      text-align: center;
      font-family: "Crimson Pro";
      margin: 0 auto;
    }
    > h3 {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 300;
      font-size: 60px;
      line-height: 70px;
      text-align: center;
      margin-top: 0;
      margin-bottom: 0px;
    }
    h5 {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 300;
      font-size: 30px;
      line-height: 35px;
      text-align: center;
      margin: 26px auto;
    }
  }
`;

const BannerTwo = styled.div`
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    > span {
      font-family: "Crimson Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 33px;
      text-align: center;
      color: #000000;
      margin-top: 55px;
      margin-bottom: 0px;
    }

    > h2 {
      font-family: "Crimson Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 80px;
      line-height: 89px;
      text-align: center;
      color: #000000;
      margin-top: 7px;
      margin-bottom: 19px;
    }

    > #date {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 300;
      font-size: 60px;
      line-height: 70px;
      text-align: center;
      margin-top: 0;
      margin-bottom: 70px;
      max-width: 504px;
    }

    p {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 300;
      font-size: 40px;
      line-height: 47px;
      text-align: center;
      color: #000000;
      margin-top: 0;
      margin-bottom: 79px;
    }

    #parents {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      max-width: 1000px;
      width: 100%;
      > p {
        max-width: 374px;
      }
      > p:nth-child(2) {
        max-width: 300px;
      }
    }

    #mirii {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 100%;
      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      p {
        font-family: "Work Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 47px;
        text-align: center;
        color: #000000;
        max-width: 200px;
        margin: 0 15px;
      }
      span {
        padding: 100px;
        background: #c4c4c4;
        border-radius: 135.5px;
      }
    }

    #nasii {
      font-family: "Work Sans";
      font-size: 40px;
      line-height: 47px;
      text-align: center;
      color: #000000;
      margin-bottom: 35px;
      margin-top: 108px;
      > p {
        margin-bottom: 35px;
      }
      #nume p {
        font-weight: 500;
        font-size: 40px;
        line-height: 47px;
        text-align: center;
        margin-bottom: 0px;
      }
    }
  }
`;

const BannerThree = styled.div`
  background: #739d7f;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    > h4 {
      font-family: "Crimson Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      line-height: 67px;
      text-align: center;
      color: #000000;
      margin-top: 37px;
      margin-bottom: 133px;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`;

const Counter = () => {
  const [days, hours, minutes, seconds] = useCountdown(
    "2022-07-28T14:00:00.000Z"
  );

  return (
    <DateCluster>
      <Date>
        <div>{days}</div>
        <span>zile</span>
      </Date>
      <Date>
        <div>{hours}</div>
        <span>ore</span>
      </Date>
      <Date>
        <div>{minutes}</div>
        <span>minute</span>
      </Date>
      <Date>
        <div>{seconds}</div>
        <span>secunde</span>
      </Date>
    </DateCluster>
  );
};

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      nasii: file(name: { eq: "nasii" }) {
        childImageSharp {
          fixed(width: 347, height: 347) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <BannerOne>
        <MaxWidth>
          <span>Buna Ioana si Vasile, noi,</span>
          <h1>Alex & Diana</h1>
          <h3>Ne căsătorim!</h3>
          <h5>în</h5>
          <Counter />
        </MaxWidth>
      </BannerOne>
      <BannerTwo>
        <MaxWidth>
          <span>și vă invităm la</span>
          <h2>Nunta noastra!</h2>
          <h2 id="date">23 Februarie 2022 Iasi, România</h2>
          <p>Împreuna cu cei care ne-au vegheat pașii:</p>
          <div id="parents">
            <p>Manuela și Constantin Andrei</p>
            <p>Aurelia și Neculai Enachi</p>
          </div>
          <div id="mirii">
            <div id="mire1">
              <p>{`Radu
             Alexandru Andrei`}</p>
              <span></span>
            </div>
            <div id="mire2">
              <span></span>
              <p>{`Diana 
            Cristina Enachi`}</p>
            </div>
          </div>
          <div id="nasii">
            <p>Impreuna cu nașii</p>
            <div id="nume">
              <p>Emilian și </p>
              <p>Delia Ancuța Prodan</p>
              <ImageContainer>
                <Img {...data.nasii.childImageSharp} />
              </ImageContainer>
            </div>
          </div>
        </MaxWidth>
      </BannerTwo>
      <BannerThree>
        <MaxWidth>
          <h4>Evenimente</h4>
        </MaxWidth>
      </BannerThree>
    </Layout>
  );
};

export default IndexPage;
