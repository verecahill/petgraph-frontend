import React from "react";
import { InstaIcon } from "./Icons";
import styled, {keyframes} from "styled-components";


const Animation = keyframes`
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`

const Loader = styled.div`
    animation: ${Animation} 1s linear infinite;
`;

export default () => (
  <Loader>
    <InstaIcon size={36}/>
  </Loader>
);

