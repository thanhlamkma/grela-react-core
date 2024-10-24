import { Button } from 'antd';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Button type='primary'>
        <Link to='/dashboard'>Dashboard</Link>
      </Button>
    </div>
  );
};

export default About;
