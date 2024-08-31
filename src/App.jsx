import SessionInfoBanner from './Components/SessionInfoBanner';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Terms from './Components/Terms';
import Privacy from './Components/Privacy';
import ContactForm from './Components/ContactForm';
import EmailSent from './Components/EmailSent';
import Safeguarding from './Components/Safeguarding';
import DiversityStatement from './Components/DiversityStatement';
import Values from './Components/Values';
import WhatWeTeach from './Components/WhatWeTeach';
import HireUs from './Components/HireUs';
import Resources from './Components/Resources';
import Code4Community from './Components/Code4Community';
import Venues from './Components/Venues';
import Team from './Components/Team';

function App() {
    return (
        <>
            <Nav />
            <SessionInfoBanner />

            <Routes basename='/'>
                <Route path='/' element={<Home />}></Route>
                <Route path='/issue' element={<ContactForm issue={true} />}></Route>
                <Route path='/contact' element={<ContactForm />}></Route>
                <Route path='/sent' element={<EmailSent />}></Route>
                <Route path='/safeguarding' element={<Safeguarding />}></Route>
                <Route path='/diversity' element={<DiversityStatement />}></Route>
                <Route path='/privacy' element={<Privacy />}></Route>
                <Route path='/terms' element={<Terms />}></Route>
                <Route path='/values' element={<Values />}></Route>
                <Route path='/what-we-teach' element={<WhatWeTeach />}></Route>
                <Route path='/hire-us' element={<HireUs />}></Route>
                <Route path='/resources' element={<Resources />}></Route>
                <Route path='/code4community' element={<Code4Community />}></Route>
                <Route path='/venues' element={<Venues />}></Route>
                <Route path='/team' element={<Team />}></Route>
            </Routes>

            <Footer />
        </>
    );
}

export default App;
