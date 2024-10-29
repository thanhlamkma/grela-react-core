import CommIcon from '@/common/components/CommIcon';
import LayoutMenu from '@/layouts/components/LayoutMenu';
import { Popover } from 'antd';
import { Link } from 'react-router-dom';

const AppLayoutHeader = () => {
  const avatarActions = [
    {
      id: 1,
      title: 'Account'
    },
    {
      id: 2,
      title: 'Dark theme'
    },
    {
      id: 3,
      title: 'Log out'
    }
  ];

  return (
    <div className='layout-header'>
      <Link className='flex items-center gap-2 font-bold' to='dashboard'>
        <CommIcon icon='icon-react' />
        <span>GRELA</span>
      </Link>

      <LayoutMenu />

      <div className='flex items-center justify-between gap-3'>
        <CommIcon icon='icon-search' />
        <CommIcon icon='icon-noti-empty' />

        <Popover
          placement='bottomLeft'
          trigger='click'
          content={
            <div className='flex flex-col gap-2 -m-2'>
              {avatarActions.map((item) => (
                <div
                  className='px-4 py-2 text-base font-medium rounded-md cursor-pointer hover:bg-neutral-200'
                  key={item.id}
                >
                  {item.title}
                </div>
              ))}
            </div>
          }
        >
          <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center text-xs font-semibold bg-red-600 rounded-full cursor-pointer w-9 h-9 text-yellow'>
              VN
            </div>
            <CommIcon className='icon-xs' icon='icon-chevron-down' />
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default AppLayoutHeader;
