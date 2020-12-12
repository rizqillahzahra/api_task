import BaseService from './baseService';
import API from '../config/rest';

const getProduct = () => {
  return BaseService.get(API.PRODUCT, {
    params: {
      limit: 10,
      offset: 0,
      search: 'bango',
    },
  });
};

export default { getProduct };
