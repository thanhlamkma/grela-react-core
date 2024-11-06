import ChartBar from '@/common/components/chart/ChartBar';
import CommCard from '@/common/components/CommCard';
import CommIcon from '@/common/components/CommIcon';
import { Card, Flex } from 'antd';
import Select, { DefaultOptionType } from 'antd/es/select';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ActivityCard = () => {
  const { t } = useTranslation('dashboard');

  const [time, setTime] = useState<string>('aDayAgo');

  const lastDayOptions: DefaultOptionType[] = [
    {
      label: t('activity.aDayAgo'),
      value: 'aDayAgo'
    },
    {
      label: t('activity.last7Days'),
      value: 'last7Days'
    },
    {
      label: t('activity.lastMonth'),
      value: 'lastMonth'
    },
    {
      label: t('activity.lastYear'),
      value: 'lastYear'
    }
  ];

  const platformData = [
    {
      id: 1,
      appName: 'Mondly platform',
      lessons: 8,
      spent: 12.5
    },
    {
      id: 2,
      appName: 'Zoom',
      lessons: 5,
      spent: 6.8
    },
    {
      id: 3,
      appName: 'Google Meet',
      lessons: 3,
      spent: 4.2
    },
    {
      id: 4,
      appName: 'Skype',
      lessons: 2,
      spent: 2.5
    }
  ];

  const handleSelect = (value: string) => setTime(value);

  return (
    <CommCard
      className='act-card'
      title={t('activity.index')}
      extra={
        <Select
          options={lastDayOptions}
          value={time}
          suffixIcon={null}
          labelRender={(selected) => (
            <Flex className='font-medium' align='center' gap={8}>
              <CommIcon className='icon-md' icon='icon-calendar' />
              <span>{selected.label}</span>
            </Flex>
          )}
          onSelect={handleSelect}
        />
      }
    >
      <Flex className='h-full' gap={12} vertical>
        <div className='act-card__spent-hour'>
          <span>24.9</span>
          <span>{t('activity.hourSpent')}</span>
        </div>

        <ChartBar
          className='act-card__chart-bar'
          type='bar'
          data={{
            labels: [
              t('activity.monday'),
              t('activity.tuesday'),
              t('activity.wednesday'),
              t('activity.thursday'),
              t('activity.friday'),
              t('activity.saturday'),
              t('activity.sunday')
            ],
            datasets: [
              {
                label: 'Hour spent',
                backgroundColor: ['#d5c7fe'],
                hoverBackgroundColor: ['#6f34fe'],
                data: [2.4, 1.6, 5, 2.5, 6.5, 4.4, 5.4],
                borderWidth: 0,
                borderRadius: 8,
                borderSkipped: false
              }
            ]
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false
              }
            },
            layout: {},
            scales: {
              x: {
                // display: false
                grid: {
                  display: false
                },
                border: {
                  display: false
                }
              },
              y: {
                display: false
              }
            }
          }}
        />

        <Card className='border-none act-card__plat-card'>
          <p className='mb-2 text-base font-semibold'>{t('activity.byPlatform')}</p>

          {platformData.map((item) => (
            <Flex className='w-full p-1 mb-2' align='center' gap={12} key={item.id}>
              <div className='w-10 h-10 bg-white rounded-full'></div>

              <Flex flex={1} align='center' justify='space-between' gap={16}>
                <div className='flex flex-col gap-1'>
                  <span className='opacity-50'>{`${item.lessons} ${t('activity.lessons').toLowerCase()}`}</span>
                  <span>{item.appName}</span>
                </div>

                <div>
                  <span>{item.spent}</span>
                  <span>h</span>
                </div>
              </Flex>
            </Flex>
          ))}
        </Card>
      </Flex>
    </CommCard>
  );
};

export default ActivityCard;
