import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled, { css } from "styled-components";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import { useCountdown } from "../components/hooks/useCountdown";
import StyledForm from "../components/StyledForm";
import BackgroundImage from "gatsby-background-image";

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
  width: 100%;
  display: flex;
  flex-direction: row;
  color: #000000;

  h3 {
    font-family: "Crimson Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    margin-bottom: 30px;
    text-align: center;
  }

  h4 {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
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
`;

const Location = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > div {
    margin-bottom: 40px;
    width: 659px;
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
  > div {
    > span {
      font-family: "Crimson Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      line-height: 67px;
      text-align: center;
      color: #000000;
      margin-top: 42px;
      margin-bottom: 66px;
    }
    > p {
      font-family: "Courier New";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 41px;
      text-align: center;
      color: #000000;
    }
  }
`;
const ImageContainer = styled.div`
  height: 300px;
  max-width: 300px;
  min-width: 300px;
  margin: 15px auto;
  border-radius: 300px;
  overflow: hidden;
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

const IndexPage = () => {
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
    }
  `);

  return (
    <Layout>
      <Hero {...data.hero.childImageSharp}>
        <BannerOne>
          <MaxWidth>
            <span>Buna Ioana si Vasile, noi,</span>
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
            <p>Impreună cu nașii</p>
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
              width="659"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
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
              width="659"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Location>
        </EventHero>
      </BannerThree>

      <BannerFive>
        <MaxWidth>
          <span>Editeaza RSVP</span>
          <p>
            Completează formularul de mai jos pentru a ne anunța decizia ta.
          </p>
          <StyledForm />
        </MaxWidth>
      </BannerFive>
    </Layout>
  );
};

export default IndexPage;
