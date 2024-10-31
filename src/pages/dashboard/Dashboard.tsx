import CommCard from '@/common/components/card/CommCard';
import { useLoading } from '@/core/providers/LoadingProvider';
import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation(['dashboard']);
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();
    setTimeout(() => {
      stopLoading();
    }, 300);
  }, [startLoading, stopLoading]);

  return (
    <Row className='h-full' gutter={[16, 16]}>
      <Col span={8}>
        <CommCard title={t('activity')}></CommCard>
      </Col>

      <Col span={16}>
        <Row className='h-full' gutter={[16, 16]}>
          <Col span={12}>
            <CommCard></CommCard>
          </Col>

          <Col span={12}>
            <CommCard></CommCard>
          </Col>

          <Col span={24}>
            <CommCard></CommCard>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Dashboard;
