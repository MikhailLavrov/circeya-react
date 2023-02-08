import { Layout } from 'antd';
import Header from './components/Header.jsx';
import './App.css';
import InfoBlock from './components/InfoBlock/InfoBlock.jsx';
import Footer from './components/Footer.jsx';

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Header />
      <Content className='content'>
        <InfoBlock />
        Slider
        Description
      </Content>
      <Footer />
    </Layout>
  );
};
export default App;
