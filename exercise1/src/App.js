
import './App.css';
import Header from './components/Header'
import MainSection from './components/MainSection';
import Notifications from './components/Notifications';
import SideSection from './components/SideSection';


function App() {

  const NotificationData = [

    {
      topic: "NIMET",
      body: " Mies sai luvan nimetä itsensä Luciferiksi – perusteli olevansa keski-ikäinen ja harkinneensa asiaa tarkkaan"
    },
    {
      topic: "PÄIVÄN TIMANTTI",
      body: " Jenni Pääskysaari hakattin, eikä hän edelleenkään tiedä miksi - Nyt hän palaa kirjassaan lapsuutensa maisemiin Korsoon"
    }] 

   

  return (
    <div className="background">
      <Header />
        {
          NotificationData.map(element => <Notifications topic = {element.topic} body = {element.body}/>)
        }


      <div className="MainContainer">
        <MainSection/>
        <SideSection/>
      </div>



    </div>
  );
}

export default App;
