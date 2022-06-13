import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled, { css } from "styled-components";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import { useCountdown } from "../components/hooks/useCountdown";
import StyledForm from "../components/StyledForm";
import BackgroundImage from "gatsby-background-image";
import { useQueryParam } from "gatsby-query-params";

const Date = styled.div`
  color: #fff;
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

  @media screen and (max-width: 500px) {
    > div {
      font-size: 40px;
      line-height: 49px;
      min-height: 49px;
    }
  }
`;

const DateCluster = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 73px;
  @media screen and (max-width: 500px) {
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
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
  padding: 0 10px;
`;

const BannerOne = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
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

    @media screen and (max-width: 500px) {
      span {
        font-size: 20px;
        line-height: 35px;
      }
      h1 {
        font-size: 50px;
        line-height: 93px;
      }
      h3 {
        font-size: 30px;
      }
      h5 {
        font-size: 15px;
      }
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
    .and {
      display: none;
    }
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
      > span {
        border: 1px solid #000000;
        font-family: "Work Sans";
        font-style: normal;
      }
    }

    #parents {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      max-width: 1000px;
      width: 100%;
      @media screen and (max-width: 500px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
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

      @media screen and (max-width: 1096px) {
        flex-direction: column;
      }
      @media screen and (max-width: 500px) {
        > div {
          flex-direction: column;
        }
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

    @media screen and (max-width: 500px) {
      > span {
        font-size: 30px;
        line-height: 53px;
      }
      > h2 {
        font-size: 45px;
        line-height: 50px;
      }

      > #date {
        font-size: 40px;
        line-height: 70px;
      }

      #parents > p {
        margin-bottom: 40px;
      }

      p {
        font-size: 26px;
        line-height: 47px;
      }

      .and {
        font-family: "Work Sans";
        display: block;
        font-size: 40px;
        margin-bottom: 40px;
      }
    }
  }
`;

const BannerThree = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  color: #000000;

  h3 {
    font-family: "Crimson Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    word-break: break-all;
    line-height: 44px;
    margin-bottom: 30px;
    text-align: center;
  }

  h4 {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    word-break: break-all;
    line-height: 35px;
    margin-bottom: 40px;
    margin-top: 0;
    text-align: center;
  }

  p {
    font-family: "Courier New";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 0;
    text-align: center;
  }

  @media screen and (max-width: 1440px) {
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    h3 {
      font-size: 30px;
    }

    h4 {
      font-size: 25px;
      white-space: pre-wrap;
      word-break: break-word;
    }

    p {
      font-size: 20px;
    }
  }
`;

const Location = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  iframe {
    width: 100%;
    max-width: 659px;
    max-height: 100% !important;
  }
  > div {
    margin-bottom: 40px;
    max-width: 659px;
    width: 100%;
  }
  @media screen and (max-width: 1440px) {
    align-items: center;
  }
  ${(props) =>
    props.swing &&
    css`
      align-items: flex-end;
      @media screen and (max-width: 1440px) {
        align-items: center;
      }
    `}
`;

const EventHero = styled(BackgroundImage)`
  width: 100%;
`;

const BannerFive = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #b3c6b1;
  padding: 66px auto;
`;
const ImageContainer = styled.div`
  height: 300px;
  max-width: 300px;
  min-width: 300px;
  margin: 15px auto;
  border-radius: 300px;
  overflow: hidden;

  @media screen and (max-width: 1096px) {
    margin: 15px 30px;
  }
`;

const Hero = styled(BackgroundImage)`
  width: 100%;
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

const BannerSix = styled(BannerTwo)`
  h4 {
    font-family: "Crimson Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 67px;
    text-align: center;
    color: #000000;
    padding-top: 50px;
  }
  #parents {
    margin-top: 82px;
    .and {
      display: none;
    }
    p {
      max-width: 250px !important;
      font-family: "Crimson Pro";
      font-style: normal;
      font-weight: 600;
      font-size: 48px;
      line-height: 53px;
      text-align: center;

      color: #000000;
    }
  }

  @media screen and (max-width: 500px) {
    h4 {
      font-size: 30px;
    }
    #parents {
      margin-top: 32px;
      .and {
        display: none;
      }
      p {
        max-width: 250px !important;
        font-family: "Crimson Pro";
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 53px;
        text-align: center;

        color: #000000;
      }
    }
  }
`;

const IndexPage = () => {
  const first = useQueryParam("first");
  const second = useQueryParam("second");

  const data = useStaticQuery(graphql`
    query {
      nasii: file(name: { eq: "nasii" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      deana: file(name: { eq: "deana" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      alex: file(name: { eq: "alex" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      hero: file(name: { eq: "hero" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      beserica: file(name: { eq: "beserica" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      petrekerea: file(name: { eq: "petrekerea" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      background: file(name: { eq: "background" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  function renderInvitees() {
    if (first && second) {
      return `Buna ${first} si ${second}, noi,`;
    }

    if (first && !second) {
      return `Buna ${first}, noi,`;
    }

    return "Noi,";
  }

  return (
    <Layout>
      <Hero {...data.hero.childImageSharp}>
        <BannerOne>
          <MaxWidth>
            <span>{renderInvitees()}</span>
            <h1>Alex & Diana</h1>
            <h3>Ne căsătorim!</h3>
            <h5>în</h5>
            <Counter />
          </MaxWidth>
        </BannerOne>
      </Hero>

      <BannerTwo>
        <MaxWidth>
          <span>și vă invităm la</span>
          <h2>Nunta noastră!</h2>
          <h2 id="date">28 August 2022 Iasi, România</h2>
          <p>Împreună cu cei ce ne-au vegheat pașii:</p>
          <div id="parents">
            <p>
              Manuela și <span>Constantin</span> Andrei
            </p>
            <div className="and">&</div>
            <p>Aurelia și Neculai Enachi</p>
          </div>
          <p>Vă invităm să ne fiți alături la oficierea căsătoriei noastre</p>
          <div id="mirii">
            <div id="mire1">
              <p>{`Radu
             Alexandru Andrei`}</p>
              <ImageContainer>
                <Img {...data.alex.childImageSharp} />
              </ImageContainer>
            </div>
            <div id="mire2">
              <ImageContainer>
                <Img {...data.deana.childImageSharp} />
              </ImageContainer>
              <p>{`Diana 
            Cristina Enachi`}</p>
            </div>
          </div>
          <div id="nasii">
            <p>Cu binecuvântarea nașilor</p>
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
        <EventHero {...data.beserica.childImageSharp}>
          <Location swing>
            <div>
              <h3>Cununia religioasă</h3>
              <h4>Biserica “Sf. Nicolae” Copou</h4>
              <p>
                ora <strong>14:00</strong>
              </p>
              <p>28 August 2022</p>
            </div>
            <iframe
              title="biserica nicolau"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.3864508858064!2d27.558154215598513!3d47.189448124694394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafcae31bb2cbb%3A0x503060df5506dfe6!2sChurch%20of%20Saint%20Nicolas%20Copou!5e0!3m2!1sen!2sro!4v1654877475683!5m2!1sen!2sro"
              style={{ border: "0" }}
              allowfullscreen=""
              height="300"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Location>
        </EventHero>
        <EventHero {...data.petrekerea.childImageSharp}>
          <Location>
            <div>
              <h3>Petrecerea</h3>
              <h4>Restaurant La Castel, Salon GreenView</h4>
              <p>
                ora <strong>16:00</strong>
              </p>
              <p>28 August 2022</p>
            </div>
            <iframe
              title="petrcker"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.2386099245587!2d27.531942115599144!3d47.21191332315224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cae39abb521203%3A0xa66728a25baac298!2sGreen%20View%20Salon!5e0!3m2!1sen!2sro!4v1654877564376!5m2!1sen!2sro"
              style={{ border: "0" }}
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Location>
        </EventHero>
      </BannerThree>

      <BannerFive>
        <StyledForm />
      </BannerFive>

      <BannerSix>
        <MaxWidth>
          <h4>Sau contactează-ne telefonic</h4>
          <div id="parents">
            <p>Alex 0751361743</p>
            <p>Diana 0749857784</p>
          </div>
        </MaxWidth>
      </BannerSix>
    </Layout>
  );
};

export default IndexPage;
