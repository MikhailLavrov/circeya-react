import './App.css';
import './fonts.css';
import Header from './components/Header.jsx';
import InfoSection from './components/InfoSection/InfoSection.jsx';
import Footer from './components/Footer.jsx';
import {topSection, bottomSection} from './content/content.js';
import styled from 'styled-components'
import {SwiperSlider} from './components/SwiperSlider';
import { sliderContent } from './content/sliderContent';

const Layout = styled.div`
  min-height: 100vh !important;
  display: flex;
  flex-direction: column;
`
const PageContent = styled.div`
  flex: 1;
  padding: 52px 0 80px;

  @media (min-width: 1024px) {
      padding: 180px 0 80px;
  }
`

const App = () => {
  return (
    <Layout>
      <Header />
      <PageContent>
        <h1 className='visually-hidden'>Circeya homepage</h1> 
        <InfoSection content={topSection.content}
                       headerLevel={topSection.headerLevel}
                       headerText={topSection.headerText} 
                       />
        <SwiperSlider sliderContent={sliderContent}/>
        <InfoSection content={bottomSection.content}
                       headerLevel={bottomSection.headerLevel}
                       headerText={bottomSection.headerText} 
                       />
      </PageContent>
      <Footer />
    </Layout>
  );
};
export default App;
