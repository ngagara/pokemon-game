import Header from './components/header/header';
import Layout from './components/layout/layout';
import Footer from './components/footer/footer';

import bg from './images/bg.jpg';

function App() {

  return (
    <>
    <Header title="This is title" desc="This is Description!"/>
    <Layout id="1" title="some title" desc="some description" urlBg={bg} colorBg={false}/>
    <Layout id="2" title="some title" desc="some description" urlBg={false} colorBg="#00FFFF"/>
    <Layout id="3" title="some title" desc="some description" urlBg={bg} colorBg={false}/>
    <Footer />
    </>
  );
}

export default App;
