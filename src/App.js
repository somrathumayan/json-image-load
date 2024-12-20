import './App.css';
import Data from "./../src/assets/data/jsondata.json";

function App() {
  return (
    <div className="">
      
      {Data.map(da => (
        // <h1 key={da.id}>{da.img}</h1>
        <div key={da.id}>
          <img src={da.img} alt={da.alt} width={200}/>
        </div>
      ))}
    </div>
  );
}

export default App;
