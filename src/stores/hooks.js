import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';

const useStores = () => {
  return useContext(MobXProviderContext);
};

// eslint-disable-next-line import/prefer-default-export
export { useStores };
