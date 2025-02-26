import './App.css';
import Skills from './components/Section1.jsx';
import Work from './components/Section2.jsx';
import Client from './components/Section3.jsx';
import Form from './components/Section4.jsx';
import Home from './components/Section0.jsx';

function App() {
  return (
    <div className="BigApp">

      <section className="Welcome">
        <Home/>
      </section>
      <section className="OtherSection" id='About'>
        <hr></hr>
        <Skills />
      </section>

      <section className="OtherSection" id='Work'>
        <hr></hr>
        <Work />
      </section>
      <section className="OtherSection" id='Contact'>
        <hr></hr>
        <Client />
      </section>
      <section id='aplly' className="OtherSection" >
        <hr></hr>
        <Form />
      </section>
    </div>
  );
}

export default App;