

import Contact from './Components/Contact';
import Header from './Components/Header';
import HappyClientsAndPosts from './Components/Posts';
import ProductList from './Components/Products';
import HappyClients from './Components/User';


const Home = () => {
  return (
    <>
      <Header />
      <ProductList />
      <HappyClients/>
      <HappyClientsAndPosts/>
      <Contact/>
    </>
  );
};

export default Home;


