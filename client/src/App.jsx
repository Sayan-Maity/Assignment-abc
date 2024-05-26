import PersonalInfo from "./components/PersonalInfo"
import CardsRow from "./components/CardsRow"
import BarChart from "./components/BarChart"
import Notepad from "./components/Notepad"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
    <Toaster />
    <div className="flex flex-col items-center justify-center py-6">

      <PersonalInfo />
      <CardsRow />
      <BarChart />
      <Notepad />

    </div>
    </>
  )
}

export default App
