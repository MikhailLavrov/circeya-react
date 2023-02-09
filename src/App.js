import { Layout } from 'antd';
import Header from './components/Header.jsx';
import './App.css';
import InfoSection from './components/InfoSection/InfoSection.jsx';
import Footer from './components/Footer.jsx';
import {topSection, bottomSection} from './content/content.js';

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Header />
      <Content className='content'>
        <h1 className='visually-hidden'>Circeya homepage</h1> 
        <InfoSection content={topSection.content}
                       headerLevel={topSection.headerLevel}
                       headerText={topSection.headerText} 
                       />
        <InfoSection content={bottomSection.content}
                       headerLevel={bottomSection.headerLevel}
                       headerText={bottomSection.headerText} 
                       />
      </Content>
      <Footer />
    </Layout>
  );
};
export default App;
