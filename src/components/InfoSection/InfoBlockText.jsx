import styled from 'styled-components';

const TextContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 56px;

  & h2 {
    margin: 0;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    /* or 29px */

    display: flex;
    align-items: center;

    color: #141414;
  }

  & p {
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    /* or 18px */

    display: flex;
    align-items: center;

    color: #141414;
    &:not(:last-child) {
      margin-bottom: 14px;
    }
  }
`
const StyledInfoSectionText = styled.article`
  align-items: center;
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
