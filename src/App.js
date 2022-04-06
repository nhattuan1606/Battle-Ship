import './App.css'
import Table from "./Table/Table";
import { TableProvider } from './Table/TableContext'

function App() {

  return (
    <div className="App">
      <TableProvider>
        {/* <button onClick={handleClickbutton}>Hiện</button> */}
        <Table />
      </TableProvider>
    </div>
  );
}

export default App;
