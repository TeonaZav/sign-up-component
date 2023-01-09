import styled from "styled-components";
const HeroSection = () => {
  return (
    <Wrapper>
      <section className="section-hero">
        <div>
          <h1 className="hero-heading">Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .section-hero div {
    width: 32.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.6rem;
    margin-bottom: 6.4rem;
    .hero-heading {
      font-size: 2.8rem;
      font-size: 700;
      line-height: 3.6rem;
      letter-spacing: -0.29px;
      text-align: center;
      color: #ffffff;
    }
    p {
      font-size: 1.6rem;
      font-size: 500;
      line-height: 2.6rem;
      text-align: center;
      color: #ffffff;
    }
  }

  @media (min-width: 90em) {
    .section-hero div {
      width: 52.5rem;
      margin-bottom: 0;
      .hero-heading {
        font-size: 5rem;
        line-height: 5.5rem;
        letter-spacing: -0.52px;
      }
    }
  }
`;

export default HeroSection;
