import styled from 'styled-components'
import React from 'react';

const StyledTag = styled.h1`
  padding: 20px;
  margin: 0;
  margin-bottom: 44px;

  width: 100%;
  max-width: 90%;
  display: flex;
  align-items: center;

  font-size: 24px;
  line-height: 1.3;
  font-weight: 500;
  font-family: 'Orchidea';

  color: #141414;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    margin-bottom: 0;
    margin: 0 auto;
    max-width: 1365px;
    
    font-size: 48px;
  }
`

const Title = ({headerLevel, children}) => {
  const TitleTag = `h${headerLevel}`;
  const StyledTitle = StyledTag.withComponent(TitleTag);
  
  return <StyledTitle>{children}</StyledTitle>
}

export default Title;
