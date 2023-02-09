import styled, { css } from 'styled-components'

const StyledInfoSectionImage = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    /* max-height: 480px; */
  }

  ${props => props.smallImg && css`
    & img {
      min-height: 360px;

      aspect-ratio: 5/4;
      object-position: 100% 10%;
    }
  `}
`
const Image = styled.img`
    width: 100%;
    min-height: 370px;
    
    object-fit: cover;

    @media (min-width: 1024px) {
      aspect-ratio: 9/5;
      object-position: 100% 30%;
    }
`

const InfoBlockImage = ({image, smallImg}) => {
  return (
    <StyledInfoSectionImage smallImg={smallImg}>
      <Image src={image} alt="info-pic" />
    </StyledInfoSectionImage>
  )
}

export default InfoBlockImage;
