import styled from "styled-components";

export const TechCardStyled = styled.div`
  width: 350px;
  -webkit-box-shadow: 0 0 20px #e4e4e4;
  box-shadow: 0 0 20px #e4e4e4;
  padding: 30px 0 50px;
  border-radius: 5px;
  font-family: ${(props) => props.theme.fonts.poppins};
  flex-shrink: 0;

  margin-bottom: 30px;
  img {
    border-radius: 10px;
    width: 100%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 20px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.red};
    padding: 10px 20px;
    width: 50%;
    margin: 0 auto;
    text-decoration: none;
    box-sizing: border-box;
    border-radius: 50px;
    transition: 0.3s;
  }
  svg {
    margin-right: 5px;
    display: inline-block;
  }

  a:hover {
    color: ${(props) => props.theme.colors.red};
    background-color: ${(props) => props.theme.colors.black};
  }

  h4 {
    font-size: 20px;
    font-weight: 600;
  }
  span {
    display: block;
    opacity: 0.8;
    font-size: 15px;
    font-weight: 400;
    margin: 10px 0;
    color: ${(props) => props.theme.colors.black} !important;
  }
`;
