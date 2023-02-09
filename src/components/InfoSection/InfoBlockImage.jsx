import styled, { css } from 'styled-components'

const StyledInfoSectionImage = styled.div`
  width: 100%;

  ${props => props.smallImg && css`
    & img {
      min-height: 360px;
      aspect-ratio: 1/0.9;
      object-position: 90% 10%;
    }
  `}
`
const Image = styled.img`
    min-height: 370px;
    object-fit: cover;
    width: 100%;
`

const InfoBlockImage = ({image, smallImg}) => {
  return (
    <StyledInfoSectionImage smallImg={smallImg}>
      <Image width={850} src={image} alt="info-pic" />
    </StyledInfoSectionImage>
  )
}

export default InfoBlockImage;
