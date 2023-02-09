import styled from 'styled-components'
import InfoBlock from './InfoBlock';

const StyledInfoSection = styled.section`
  display: flex;
  flex-direction: column;
`

const InfoSection = ({content}) => {
  return (
    <StyledInfoSection>
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
