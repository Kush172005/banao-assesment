import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AddYourOwn from "./components/Landing/AddYourOwn";
import Attraction from "./components/Landing/Attraction";
import Card from "./components/Landing/Card";
import Main from "./components/Landing/Main";
import Testimonials from "./components/Landing/Testimonials";
import ScrollToTop from "./components/Scroll/ScrollToTop";

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Card />
            <AddYourOwn />
            <Testimonials />
            <Attraction />
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;
