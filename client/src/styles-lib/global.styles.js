import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: mintcream;
  text-decoration: none;
`;

const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Expletus+Sans|Raleway|Griffy|Yanone+Kaffeesatz:400,700");
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600);

    html,
    body {
      height: 100%;
    }
    html {
      font-size: 10px;
    }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family:"Open Sans", Helvetica, Arial, sans-serif;
      font-weight:300;
      color:#777;

      background: -moz-linear-gradient(
        top,
        #f5f5dc 0%,
        #d2b48c 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        #f5f5dc 0%,
        #d2b48c 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        #f5f5dc 0%,
        #d2b48c 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      background-repeat: no-repeat;
      background-attachment: fixed;
      height: 100%;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-smoothing:antialiased;
	    text-rendering:optimizeLegibility;
    }
    li {
      list-style-type: none;
    }
`;

export default GlobalStyles;
