import styled from "styled-components";

export const TitleContainer = styled.div`
  padding: 95px 0;
  background-color: ${(props) => props.theme.colors.black};
  color: white;
  text-align: center;
  h2 {
    margin: 0 auto;
    position: relative;
    width: fit-content;
  }
  svg {
    left: -20%;
    position: absolute;
    color: ${(props) => props.theme.colors.red};
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    border: none;
    position: relative;
    text-align: right;
  }
`;
