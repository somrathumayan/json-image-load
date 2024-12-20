import './App.css';
import Data from "./../src/assets/data/jsondata.json";

function App() {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"    center"}}>
      {Data.map(da => (
        <div key={da.id} style={{display:"flex",float:"left", height:"200px", border:"5px solid tomato", margin:"5px", textAlign:"center"}}>
          <img src={da.img} alt={da.alt} width={200}/>
        </div>
      ))}
    </div>
  );
}

export default App;
