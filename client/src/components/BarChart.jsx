import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';
import { DummyData } from '../constants/DummyData';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const BarChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Last Week Data (Temperature)',
            },
        },
    };

    const data = {
        labels: DummyData.week_data.map((item) => item.day),
        datasets: [
            {
                label: 'Temperature',
                data: DummyData.week_data.map((day) => day.temperature),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            // {
            //     label: 'Rainfall',
            //     data: DummyData.week_data.map((day) => day.rainfall),
            //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
            // },
            // {
            //     label: 'Humidity',
            //     data: DummyData.week_data.map((day) => day.humidity),
            //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
            // },
        ],
    };
    return (
        <div className='w-[100%] xl:w-[1200px] mt-[5rem]'>
            <Bar options={options} data={data} width="100%" height="30vh"/>
        </div>
    )
}

export default BarChart
