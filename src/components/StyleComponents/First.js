import React from 'react'
import styled from 'styled-components'

const First = () => {
 const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  
  &:hover{
    background:"red";
  }
`;
const Wrap=styled.div`
padding:4em;
background:papayawhip;
`;




  return (
   <>
  <Wrap>
    <Title>
        Aniket
    </Title>
  </Wrap>

   </>
  )
}

export default First