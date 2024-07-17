import Bottomsection from "./Components/Bottomsection"
import { Cardsection } from "./Components/Cardsection"
import { Footersection } from "./Components/Footersection"
import { Headersection } from "./Components/Headersection"
import Midsection from "./Components/Midsection"
import { Navbar } from "./Components/Navbar"

function App() {


  return (
    <>
      <div>
      <Navbar/>
      <Headersection/>
      <Midsection/>
      <Cardsection/>
      <Bottomsection/>
      <Footersection/>
      </div>
      
    </>
  )
}

export default App
