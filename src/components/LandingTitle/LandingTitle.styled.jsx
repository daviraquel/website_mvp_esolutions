import styled from "styled-components";

export const MainTitleContainer = styled.section`
  height: 100vh;
  position: relative;
  background-color: transparent;
  img {
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  svg {
    position: absolute;
    width: 46px;
    height: 25px;
    left: calc(50% - 23px);
    bottom: 80px;
    animation: 2s infinite bounce;
  }
  polyline {
    height: 100%;
    display: block;
    fill: transparent;
    stroke: ${(props) => props.theme.colors.red};
    stroke-width: 2;
  }

  @-webkit-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
    }
  }

  @-moz-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -moz-transform: translateY(0);
    }
    40% {
      -moz-transform: translateY(-30px);
    }
    60% {
      -moz-transform: translateY(-15px);
    }
  }

  @-o-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -o-transform: translateY(0);
    }
    40% {
      -o-transform: translateY(-30px);
    }
    60% {
      -o-transform: translateY(-15px);
    }
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;
