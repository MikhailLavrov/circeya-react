import { Layout } from 'antd';
import Header from './components/Header.jsx';
import './App.css';
import InfoSection from './components/InfoSection/InfoSection.jsx';
import Footer from './components/Footer.jsx';
import content from './content/content.js';

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Header />
      <Content className='content'>
        <h1 className='visually-hidden'>Circeya homepage</h1> 
        <InfoSection content={content.topSectionContent} />
        <InfoSection content={content.bottomSectionContent} />
      </Content>
      <Footer />
    </Layout>
  );
};
export default App;
