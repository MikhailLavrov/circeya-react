import styled from 'styled-components';

const TextContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

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
const StyledHeroContent = styled.article`
  align-items: center;
`
const ImageWrapper = styled.div`
  width: 100%;

  & img {
    width: 100%;
    display: block;
  }
`

const InfoBlockContent = (props) => {
  return (
    <StyledHeroContent>
      <div>
        <ImageWrapper>
          <img width={1086} src={props.image} alt="info-pic" />
        </ImageWrapper>
        <TextContentBlock>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <div>
            <p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
        </TextContentBlock>
      </div>
    </StyledHeroContent>
  )
}

export default InfoBlockContent;
