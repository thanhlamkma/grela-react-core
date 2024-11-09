import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import classNames from 'classnames';
import { Bar, ChartProps } from 'react-chartjs-2';

interface ChartBarProps extends ChartProps<'bar'> {
  className?: string;
}

const ChartBar = ({ className, ...props }: ChartBarProps) => {
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

  return <Bar {...props} className={classNames('chart-bar', className)} />;
};

export default ChartBar;
