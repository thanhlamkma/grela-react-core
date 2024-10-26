import { useLoading } from '@/core/providers/LoadingProvider';
import { Col, Row, Typography } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation(['actions', 'errors']);
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();
    setTimeout(() => {
      stopLoading();
    }, 300);
  }, [startLoading, stopLoading]);

  return (
    <Row gutter={12}>
      <Col span={8}>{t('actions:add')}</Col>

      <Col span={16}>
        <Row gutter={12}>
          <Col span={12}>
            <Typography>Col 2</Typography>
          </Col>

          <Col span={12}>Col 3</Col>

          <Col span={24}>Col 4</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Dashboard;
