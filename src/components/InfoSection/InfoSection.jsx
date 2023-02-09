import styled from 'styled-components'
import InfoBlock from './InfoBlock';
import Title from '../common/Title'

const StyledInfoSection = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    align-items: center;
    gap: 100px;
  }
`

const InfoSection = ({content, headerLevel, headerText}) => {
  return (
    <StyledInfoSection>
      <Title headerLevel={headerLevel} children={headerText} />
      {
        content.map(item => 
        <InfoBlock 
          headerLevel={item.headerLevel}
          headerText={item.headerText}
          image={item.image}
          infoTitle={item.infoTitle}
          infoText1={item.infoText1}
          infoText2={item.infoText2}
          smallImg={item.smallImg}
      />)
      }
    </StyledInfoSection>
  )
}

export default InfoSection;
