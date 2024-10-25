import { useLoading } from '@/core/providers/LoadingProvider';
import { Button } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { t } = useTranslation(['actions', 'errors']);
  const { startLoading, stopLoading } = useLoading();
  useEffect(() => {
    startLoading();
    setTimeout(() => {
      stopLoading();
    }, 1000);
  }, [startLoading, stopLoading]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{t('errors:403.sub_title')}</p>
      <Button type='primary'>
        <Link to='/about'>About</Link>
      </Button>
    </div>
  );
};

export default Dashboard;
