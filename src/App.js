import FlightCard from "./Components/FlightCard/FlightCard";
import Header from "./Components/Header/Header";
import Header1 from "./Components/Header1/Header1";
import Header2 from "./Components/Header2/Header2";
import Hotelcard from "./Components/HotelCard/Hotelcard";

function App() {
  return (
    <div className="App">
      <FlightCard/>
      <Hotelcard/>
      <Header/>
      {/* <Header1/>
      <Header2/> */}
    </div>
  );
}

export default App;
