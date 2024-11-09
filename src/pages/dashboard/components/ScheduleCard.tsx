import CommCard from '@/common/components/CommCard';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const ScheduleCard = () => {
  const { t } = useTranslation('dashboard');

  return (
    <CommCard
      className='schedule-card'
      title={t('schedule.index')}
      extra={
        <div className='flex items-center gap-4'>
          <div className='prev-btn'>
            <LeftOutlined />
          </div>
          <span className='font-semibold'>Today</span>
          <div className='next-btn'>
            <RightOutlined />
          </div>
        </div>
      }
    ></CommCard>
  );
};

export default ScheduleCard;
