import styled from "styled-components";

export const TeamCardStyled = styled.div`
  position: relative;
  flex-shrink: 0;
  img {
    border-radius: 10px;
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
  a {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.red};
    width: 32px;
    height: 32px;
    line-height: 35px;
    text-align: center;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translateX(-50%);
  }
  h4 {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  span {
    font-size: 70%;
    display: block;
    margin-top: 10px;
    color: ${(props) => props.theme.colors.gray} !important;
  }
`;
