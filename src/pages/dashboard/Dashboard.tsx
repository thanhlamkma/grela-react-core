import CommCard from '@/common/components/CommCard';
import { useLoading } from '@/core/providers/LoadingProvider';
import ActivityCard from '@/pages/dashboard/components/ActivityCard';
import CourseCard from '@/pages/dashboard/components/CourseCard';
import StatisticCard from '@/pages/dashboard/components/StatisticCard';
import { Col, Row } from 'antd';
import { useEffect } from 'react';

const Dashboard = () => {
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();
    setTimeout(() => {
      stopLoading();
    }, 300);
  }, [startLoading, stopLoading]);

  return (
    <Row className='dashboard-page' gutter={[16, 16]}>
      <Col className='h-full' span={8}>
        <ActivityCard />
      </Col>

      <Col span={16}>
        <Row className='h-full' gutter={[16, 16]}>
          <Col className='card-half-page' span={12}>
            <StatisticCard />
          </Col>

          <Col className='card-half-page' span={12}>
            <CourseCard />
          </Col>

          <Col className='card-half-page' span={24}>
            <CommCard></CommCard>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Dashboard;
