import CommCard from '@/common/components/CommCard';
import { getInitials } from '@/core/utils/string';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ScheduleCard = () => {
  const { t } = useTranslation('dashboard');

  const data = [
    {
      id: 1,
      date: dayjs().subtract(2, 'day').format('DD/MM'),
      rangeTime: '10:30 - 12:00',
      rank: 'beginner',
      author: 'Kristin Watson',
      level: 'Mentor',
      color: 'red'
    },
    {
      id: 2,
      date: dayjs().subtract(1, 'day').format('DD/MM'),
      rangeTime: '13:00 - 14:00',
      rank: 'advanced',
      author: 'Cody Fisher',
      level: 'Senior',
      color: 'blue'
    },
    {
      id: 3,
      date: dayjs().format('DD/MM'),
      rangeTime: '16:00 - 17:00',
      rank: 'advanced',
      author: 'Jacob Jones',
      level: 'Mentor',
      color: 'green'
    },
    {
      id: 4,
      date: dayjs().add(1, 'day').format('DD/MM'),
      rangeTime: '09:30 - 11:00',
      rank: 'beginner',
      author: 'Grela',
      level: 'Mentor',
      color: 'purple'
    },
    {
      id: 5,
      date: dayjs().add(2, 'day').format('DD/MM'),
      rangeTime: '14:30 - 16:00',
      rank: 'advanced',
      author: 'Wayne',
      level: 'Senior',
      color: 'orange'
    }
  ];

  const [selectedDate, setSelectedDate] = useState<string>(dayjs().format('DD/MM'));

  const dateMemo = useMemo(
    () => (selectedDate === dayjs().format('DD/MM') ? t('schedule.today') : selectedDate),
    [selectedDate, t]
  );

  const scheduleData = useMemo(() => {
    const currentIndex = data.findIndex((item) => item.date === selectedDate);

    if (currentIndex !== -1) {
      const offset = -1; // for prevIndex
      const nextOffset = 1; // for nextIndex

      const prevIndex = (currentIndex + offset + data.length) % data.length;
      const nextIndex = (currentIndex + nextOffset + data.length) % data.length;

      return [data[prevIndex], data[currentIndex], data[nextIndex]];
    }

    // Return an empty array if selectedDate is not found
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  // Actions
  const handleChangeData = (type: 'prev' | 'next') => {
    const currentIndex = data.findIndex((item) => item.date === selectedDate);
    if (currentIndex !== -1) {
      const offset = type === 'prev' ? -1 : 1;
      const index = (currentIndex + offset + data.length) % data.length;
      setSelectedDate(data[index].date);
    }
  };

  return (
    <CommCard
      className='schedule-card'
      title={t('schedule.index')}
      extra={
        <div className='flex items-center gap-4'>
          <div className='prev-btn' onClick={() => handleChangeData('prev')}>
            <LeftOutlined />
          </div>
          <span className='font-semibold'>{dateMemo}</span>
          <div className='next-btn' onClick={() => handleChangeData('next')}>
            <RightOutlined />
          </div>
        </div>
      }
    >
      <div className='grid h-[calc(100%-46px)] grid-cols-3 gap-3'>
        {scheduleData.map((item, index) => (
          <div
            className={`flex flex-col justify-between child-card ${index === 1 ? 'selected' : ''}`}
          >
            <div className='flex flex-col gap-2'>
              <p className='font-medium opacity-60'>{item.rangeTime}</p>
              <p className='text-xl font-medium'>{t('schedule.techEngForBeginners')}</p>
              <div className='custom-tag blue-tag'>
                {item.rank === 'beginner' ? t('schedule.beginner') : t('schedule.advanced')}
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <div className='avatar' style={{ background: item.color }}>
                {getInitials(item.author)}
              </div>
              <div>
                <p className='font-medium'>{item.author}</p>
                <p className='text-[13px] opacity-60'>{item.level}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CommCard>
  );
};

export default ScheduleCard;
