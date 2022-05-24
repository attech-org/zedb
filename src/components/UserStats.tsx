import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    :visited{
        color: black;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const Quantity = styled.p`
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 2px;
`; 

const VariableName = styled.p`
    font-size: 10px;
    letter-spacing: 1px;
`;

const UserStats = (props: any) => {
  return (
    <>
    <Wrapper>
        <Quantity><StyledLink to='/'>{props.quantity}</StyledLink></Quantity>
        <VariableName><StyledLink to='/'>{props.variableName}</StyledLink></VariableName>
     </Wrapper>
    </>
  );
};

export default UserStats;
