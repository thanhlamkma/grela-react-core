import { LoadingComponentType } from '@/core/providers/LoadingProvider';
import { Spin } from 'antd';

const CommLoading: LoadingComponentType<{ fullscreen?: boolean }> = ({
  state,
  children,
  fullscreen = true
}) => {
  return (
    <Spin
      spinning={state}
      className={fullscreen ? 'min-h-screen fixed z-[99999] top-0 left-0' : '!max-h-[unset]'}
    >
      {children}
    </Spin>
  );
};

export default CommLoading;
