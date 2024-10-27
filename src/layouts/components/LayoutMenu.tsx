import router from '@/routes';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const LayoutMenu = () => {
  console.log(router.routes[0].children);
  const { pathname } = useLocation();
  return (
    <div className='layout-header__menu'>
      {router.routes[0].children?.map((item) => {
        return (
          <Link
            className={classNames(
              'layout-header__menu-item',
              pathname === `/${item.path}` ? 'text-white hover:text-white' : 'hover:text-neutral-500'
            )}
            to={item.path ?? ''}
            key={item.id}
          >
            {item.path}
            {pathname === `/${item.path}` ? <motion.div className='active' layoutId='active'></motion.div> : null}
          </Link>
        );
      })}
      {/* <div
        className={classNames(
          `start-${item.path}`,
          pathname === `/${item.path}` ? 'menu-active' : 'menu-inactive'
        )}
      ></div> */}
    </div>
  );
};

export default LayoutMenu;
