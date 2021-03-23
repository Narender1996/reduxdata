import "./App.css";
import 'semantic-ui-css/semantic.min.css'
import Routing from "./Route/Routing";
import Header from "./Component/Header/HeaderComponent/Header"



function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      {/* <Footer /> */}
    </div>
  );
}

export default App;


