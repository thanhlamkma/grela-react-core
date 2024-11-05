import ChartBar from '@/common/components/chart/ChartBar';
import CommCard from '@/common/components/CommCard';
import CommIcon from '@/common/components/CommIcon';
import { Flex } from 'antd';
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

  const handleSelect = (value: string) => setTime(value);

  return (
    <CommCard
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
      <Flex gap='middle' vertical>
        <div>
          <span>24.9</span>
          <span>{t('activity.hourSpent')}</span>
        </div>

        <ChartBar
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
      </Flex>
    </CommCard>
  );
};

export default ActivityCard;
