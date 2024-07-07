import Data1 from "./mappings/data1"
import Datamapping from "./mappings/Datamapping"
import Navbar from "./navbar/navbar"
import Afternavbar from "./after"
import SearchBar from "./Searchbar"


function App() {
 return (
   <>
   <div className="bg-slate-200 p-3 pl-10 ">
   <Navbar />
   <Afternavbar />
   <SearchBar />
   <Datamapping Data={Data1}/>
   </div>
   </>
 )
}
export default App