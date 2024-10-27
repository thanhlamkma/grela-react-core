import { toCapitalizeCase } from '@/common/utils/uString';
import router from '@/routes';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

const LayoutMenu = () => {
  console.log(router.routes[0].children);
  const { pathname } = useLocation();
  return (
    <div className='layout-header__menu'>
      {router.routes[0].children?.map((item) => {
        return (
          <Link
            className={classNames('layout-header__menu-item', pathname === `/${item.path}` ? 'active' : '')}
            to={item.path ?? ''}
            key={item.id}
          >
            {toCapitalizeCase(item.path ?? '')}
          </Link>
        );
      })}
    </div>
  );
};

export default LayoutMenu;
