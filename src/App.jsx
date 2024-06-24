import SessionInfoBanner from './Components/SessionInfoBanner';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Terms from './Components/Terms';
import Privacy from './Components/Privacy';
import ContactForm from './Components/ContactForm';
import EmailSent from './Components/EmailSent';

function App() {
    return (
        <>
            <Nav />
            <SessionInfoBanner />

            <Routes basename='/'>
                <Route path='/' element={<Home />}></Route>
                <Route path='/contact' element={<ContactForm />}></Route>
                <Route path='/sent' element={<EmailSent />}></Route>
                <Route path='/privacy' element={<Privacy />}></Route>
                <Route path='/terms' element={<Terms />}></Route>
            </Routes>

            <Footer />
        </>
    );
}

export default App;
