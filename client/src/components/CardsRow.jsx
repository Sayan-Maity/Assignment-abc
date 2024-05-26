import { DummyData } from '../constants/DummyData'
import Card from './Card'

const Cards = () => {
  return (
    <div className="flex flex-col w-[100%] xl:w-[1200px] mt-[5rem]"> 
    <p className='text-3xl font-bold'>⛅ Weather Data</p>
    <div className="flex flex-row flex-wrap justify-around gap-4 w-[100%] xl:w-[1200px] mt-6">

      <Card title={"Average Temperature"} data={DummyData.averages.average_humidity} color={"red"} />
      <Card title={"Average Rainfall"} data={DummyData.averages.average_rainfall} color={"green"} />
      <Card title={"Average Humidity"} data={DummyData.averages.average_temperature} color={"yellow"} />
      <Card title={"Current Temperature"} data={DummyData.current_temperature} color={"blue"} />
    </div>
    </div>
  )
}

export default Cards
