import CommIcon from '@/common/components/CommIcon';
import LayoutMenu from '@/layouts/components/LayoutMenu';
import { Link } from 'react-router-dom';

const AppLayoutHeader = () => {
  return (
    <div className='layout-header'>
      <Link className='flex items-center gap-2 font-bold' to='dashboard'>
        <CommIcon icon='icon-react' />
        <span>GRELA</span>
      </Link>

      <LayoutMenu />

      <span>Account</span>
    </div>
  );
};

export default AppLayoutHeader;
