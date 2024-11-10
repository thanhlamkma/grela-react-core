import CommIcon, { CommIconType } from '@/common/components/CommIcon';
import { languageStoreState } from '@/common/stores/LanguageStore';
import { darkThemeStoreState } from '@/common/stores/ThemeStore';
import { SupportedLanguage } from '@/core/localization';
import LayoutMenu from '@/layouts/components/LayoutMenu';
import { Flex, Popover, Select, Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const AppLayoutHeader = () => {
  const { t, i18n } = useTranslation('common');
  const [languageStore, setLanguageStore] = useRecoilState(languageStoreState);
  const [themeStore, setThemeStore] = useRecoilState(darkThemeStoreState);

  const avatarActions = [
    {
      id: 1,
      title: t('account'),
      handler: () => {}
    },
    {
      id: 2,
      title: t('logOut'),
      handler: () => {}
    }
  ];

  const langOptions = [
    {
      value: SupportedLanguage.VI,
      label: 'icon-flag-vn'
    },
    {
      value: SupportedLanguage.EN,
      label: 'icon-flag-en'
    },
    {
      value: SupportedLanguage.KO,
      label: 'icon-flag-ko'
    }
  ];

  // Actions
  function handleChangeLanguage(value: string) {
    i18n.changeLanguage(value);
    setLanguageStore(value);
  }

  function handleToggleTheme(value: boolean) {
    setThemeStore(value);
  }

  return (
    <div className='layout-header'>
      <Flex align='center' gap={16}>
        <Link className='flex items-center gap-2 font-bold' to='dashboard'>
          <CommIcon icon='icon-react' />
          <span>GRELA</span>
        </Link>
        <Switch
          className='layout-header__theme-switch'
          checkedChildren={<CommIcon className='icon-md' icon='icon-moon' />}
          unCheckedChildren={<CommIcon className='icon-lg' icon='icon-sun' />}
          value={themeStore}
          onChange={handleToggleTheme}
        />
      </Flex>

      <LayoutMenu />

      <div className='flex items-center justify-between gap-3'>
        <CommIcon className='cursor-pointer' icon='icon-search' />
        <CommIcon className='cursor-pointer' icon='icon-noti-empty' />
        <Select
          className='layout-header__lang-selection'
          popupClassName='lang-selection__popup'
          suffixIcon={null}
          options={langOptions}
          optionRender={(option) => <CommIcon icon={option.label as CommIconType} />}
          labelRender={(props) => <CommIcon icon={props.label as CommIconType} />}
          value={languageStore}
          onSelect={handleChangeLanguage}
        ></Select>

        <Popover
          placement='bottomLeft'
          trigger='click'
          content={
            <div className='flex flex-col gap-2 -m-2'>
              {avatarActions.map((item) => (
                <div
                  className='px-4 py-2 text-base font-medium rounded-md cursor-pointer hover:bg-neutral-200'
                  key={item.id}
                  onClick={() => item?.handler && item.handler()}
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
