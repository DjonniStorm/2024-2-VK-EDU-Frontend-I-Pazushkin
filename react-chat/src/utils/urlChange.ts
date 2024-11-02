import { QUERY_CHAT } from './consts';

export const changeUrl = ({ params }: { params?: string }) => {
  if (params) {
    history.replaceState(null, '', `?${QUERY_CHAT}=${params}`);

    return;
  }

  history.replaceState(null, '', `/`);
};
