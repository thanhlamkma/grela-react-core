import {
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import classNames from 'classnames';
import { Bar } from 'react-chartjs-2';

interface ChartBarProps {
  className?: string;
  data: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
}

const ChartBar = ({ data, className, options }: ChartBarProps) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  );

  return <Bar className={classNames('chart-bar', className)} data={data} options={options} />;
};

export default ChartBar;
