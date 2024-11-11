import CommCard from '@/common/components/CommCard';
import { Button, Progress } from 'antd';
import { useTranslation } from 'react-i18next';

const CourseCard = () => {
  const { t } = useTranslation('dashboard');

  return (
    <CommCard className='course-card'>
      <div className='flex flex-col justify-between h-full gap-4'>
        <div>
          <div className='flex items-center gap-3 mb-3'>
            <div className='custom-tag green-tag'>{t('groupCourse')}</div>
            <div className='custom-tag blue-tag'>{t('schedule.advanced')}</div>
          </div>

          <div>
            <p className='mb-2 text-xl font-semibold'>{t('schedule.engPunctuationMadeEasy')}</p>
            <div className='opacity-60'>
              {t('punctuation')} - {t('punctuationDesc')}
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-3'>
          <div className='child-card'>
            <p className='mb-1 font-medium opacity-80'>{t('participants')}</p>
            <div className='avatar-container'>
              <div className='avatar'>VN</div>
              <div className='avatar'>KO</div>
              <div className='avatar'>EN</div>
              <div className='avatar'>US</div>
            </div>
          </div>

          <div className='child-card'>
            <p className='mb-1 font-medium opacity-80'>{t('courseProgress')}</p>
            <Progress
              className='course-card__progress'
              percent={75}
              percentPosition={{ align: 'start', type: 'inner' }}
            />
          </div>
        </div>

        <Button className='course-card__btn'>{t('continueLearning')}</Button>
      </div>
    </CommCard>
  );
};

export default CourseCard;
