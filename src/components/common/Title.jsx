import styled from 'styled-components'
import React from 'react';

const StyledTag = styled.h1`
  padding: 20px;
  margin: 0;
  margin-bottom: 64px;

  max-width: 320px;
  display: flex;
  align-items: center;

  color: #141414;
  font-size: 24px;
  line-height: 1.3;
  font-weight: 500;
  text-transform: uppercase;
  `

const Title = ({headerLevel, children}) => {
  const TitleTag = `h${headerLevel}`;
  const StyledTitle = StyledTag.withComponent(TitleTag);
  
  return <StyledTitle>{children}</StyledTitle>
}

export default Title;
