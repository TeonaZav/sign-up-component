import styled from "styled-components";
const FreeTrialCard = () => {
  return (
    <Wrapper>
      <div className="trial-card">
        <div className="description-wrap">
          <p>
            <span>Try it free 7 days </span>
            then $20/mo. thereafter
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .trial-card {
    width: 32.7rem;
    height: 8.8rem;
    background: #5e54a4;
    box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
    border-radius: 1rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .description-wrap {
      width: 19.4rem;
      text-align: center;
      & p {
        color: #ffffff;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 400;
        letter-spacing: 0.27px;
        line-height: 2.6rem;
      }
      & span {
        font-weight: 500;
      }
    }
  }

  @media (min-width: 90em) {
    .trial-card {
      width: 54rem;
      height: 6rem;
      .description-wrap {
        width: 32rem;
      }
    }
  }
`;

export default FreeTrialCard;
