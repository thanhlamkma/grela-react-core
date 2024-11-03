import CommCard from '@/common/components/CommCard';
import CommIcon from '@/common/components/CommIcon';
import { Flex } from 'antd';
import Select, { DefaultOptionType } from 'antd/es/select';
import { useTranslation } from 'react-i18next';

const ActivityCard = () => {
  const { t } = useTranslation('dashboard');

  const lastDayOptions: DefaultOptionType[] = [
    {
      label: t('activity.last7Days'),
      value: 'last7Days'
    }
  ];

  return (
    <CommCard
      title={t('activity.index')}
      extra={
        <Select
          options={lastDayOptions}
          value={lastDayOptions[0].value}
          suffixIcon={null}
          labelRender={(selected) => (
            <Flex className='font-medium' align='center' gap={8}>
              <CommIcon className='icon-md' icon='icon-calendar' />
              <span>{selected.label}</span>
            </Flex>
          )}
        />
      }
    ></CommCard>
  );
};

export default ActivityCard;
