import CommCard from '@/common/components/CommCard';
import CommIcon from '@/common/components/CommIcon';
import { Card } from 'antd';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

enum ProgressEnum {
  INPROGRESS = 'INPROGRESS',
  COMPLETED = 'COMPLETED',
  UPCOMING = 'UPCOMING'
}

const StatisticCard = () => {
  const { t } = useTranslation('dashboard');

  const data = [
    {
      key: ProgressEnum.INPROGRESS,
      percentage: 24,
      tasks: 8,
      color: '#6f3bea',
      className: 'bar__inprogress',
      icon: <CommIcon icon='icon-clock' style={{ color: 'white' }} />
    },
    {
      key: ProgressEnum.COMPLETED,
      percentage: 35,
      tasks: 12,
      color: '#52c88e',
      className: 'bar__completed',
      icon: <CommIcon icon='icon-check-circle' style={{ color: 'white' }} />
    },
    {
      key: ProgressEnum.UPCOMING,
      percentage: 41,
      tasks: 14,
      color: '#ff782a',
      className: 'bar__upcoming',
      icon: <CommIcon icon='icon-calendar' style={{ color: 'white' }} />
    }
  ];

  return (
    <CommCard className='stat-card' title={t('statistic.index')}>
      <div className='flex flex-col h-[calc(100%-46px)] gap-4'>
        <div className='flex items-end gap-2 '>
          <span className='big-number'>64%</span>
          <span className='opacity-60'>{t('statistic.totalActivity')}</span>
        </div>

        <div className='flex w-full gap-1'>
          {data.map((item) => (
            <div style={{ width: `${item.percentage}%` }} key={item.key}>
              <div
                className={`${item.className} h-[6px] w-full rounded`}
                style={{
                  background: item.color
                }}
              ></div>
              <span>{item.percentage}%</span>
            </div>
          ))}
        </div>

        <Card className='border-none stat-card__task-card'>
          <div className='flex items-center justify-center h-full'>
            {data.map((item, index) => (
              <div
                className={classNames(
                  'h-full flex flex-col items-center justify-center flex-1 gap-1',
                  index === 1 ? 'border-l border-r border-[#aaaaaa]' : ''
                )}
                key={item.key}
              >
                <div
                  className='flex items-center justify-center w-10 h-10 mb-2 text-white rounded-full'
                  style={{
                    background: item.color,
                    color: 'white'
                  }}
                >
                  {item.icon}
                </div>

                <span className='text-xl font-semibold'>{item.tasks}</span>
                <span>
                  {item.key === ProgressEnum.INPROGRESS
                    ? t('statistic.inProgress')
                    : item.key === ProgressEnum.COMPLETED
                      ? t('statistic.completed')
                      : t('statistic.upcoming')}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </CommCard>
  );
};

export default StatisticCard;
