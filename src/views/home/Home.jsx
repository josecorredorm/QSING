import Banner from '../../components/Banner/Banner'
import HomeContent from '../../components/HomeContent/HomeContent';
import NavApp from '../../components/NavApp/NavApp'

const Home = () => {
  const img =[
      "/banner1.jpg",
      "/banner2.jpg",
      "/banner3.jpg"
  ];
  return (
    <>
    <NavApp/>
    <Banner img={img} interval={5000}/>
    <HomeContent/>
    </>
  )
}

export default Home