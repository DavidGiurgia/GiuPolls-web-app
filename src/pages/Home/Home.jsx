import NavBar from '../../components/NavBar/NavBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import HeroSection from '../../components/HeroSection/HeroSection'
import styles from './Home.module.css'
import Sidebar from '../../components/Sidebar/Sidebar.jsx';

export default function Home(){
    return <div className={styles.home}>
        <NavBar/>
        <Sidebar/>
        <HeroSection/>

        <Footer/>
    </div>
}