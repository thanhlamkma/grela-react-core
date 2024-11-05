import router from '@/routes';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const LayoutMenu = () => {
  const { pathname } = useLocation();
  return (
    <div className='layout-header__menu'>
      {router.routes[0].children?.map((item) => {
        return (
          <Link
            className={classNames('layout-header__menu-item', {
              'menu-active': pathname === `/${item.path}`
            })}
            to={item.path ?? ''}
            key={item.id}
          >
            {item.path}
            {pathname === `/${item.path}` ? (
              <motion.div className='active' layoutId='active'></motion.div>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
};

export default LayoutMenu;
