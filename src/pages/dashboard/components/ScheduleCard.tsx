import CommCard from '@/common/components/CommCard';
import { useTranslation } from 'react-i18next';

const ScheduleCard = () => {
  const { t } = useTranslation('dashboard');

  return <CommCard title={t('schedule.index')} extra={<div></div>}></CommCard>;
};

export default ScheduleCard;
