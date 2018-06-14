import axios from 'axios';
import tokenProvider from 'axios-token-interceptor';
import config from '@/config';
// import { lsToken, } from '@/store/modules/auth';

const instance = axios.create(config.axios);
const lsToken = 'access-token';

//
// Provides auth header token dynamically with each API
// request, taken from a localStorage
//
// Our Vuex implementation write auth token received from API
// after authentication call, which is then used here
//
// @link store/modules/auth
//
// instance.interceptors.request.use(tokenProvider({
//   header:          'Authorization',
//   headerFormatter: token => `Bearer ${token}`,
//   getToken:        () => lsToken || '',
// }));

export default instance;
