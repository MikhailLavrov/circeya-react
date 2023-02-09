import styled from 'styled-components';

const StyledInfoSectionText = styled.article`
  padding: 40px 20px 56px;
  
  @media (min-width: 1024px) {
    max-width: 640px;
  }
`
const TextContentBlock = styled.div`
  & h2 {
    margin: 0;
    margin-bottom: 20px;

    display: flex;
    align-items: center;

    font-weight: 500;
    font-size: 24px;
    line-height: 1.2;
    /* or 29px */
    color: #141414;
    
    @media (min-width: 1024px) {
      font-size: 48px;
      line-height: 1.1;
    }
  }

  & p {
    margin: 0;

    display: flex;
    align-items: center;

    font-weight: 500;
    font-size: 14px;
    line-height: 1.3;
    /* or 18px */

    color: #141414;

    &:not(:last-child) {
      margin-bottom: 14px;
    }

    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }
`

const InfoBlockText = ({ title, text1, text2}) => {
  return (
    <StyledInfoSectionText>
        <TextContentBlock>
          <h2>{title}</h2>
          <div>
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
        </TextContentBlock>
    </StyledInfoSectionText>
  )
}

export default InfoBlockText
