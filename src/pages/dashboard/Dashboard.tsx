import { Button } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { t } = useTranslation(['actions', 'errors']);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);

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
