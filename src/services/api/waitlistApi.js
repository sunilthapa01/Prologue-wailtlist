import { http } from './httpClient';

export const waitlistApi = {
  join: (email) => http.post('/api/waitlist', { email }),
  getCount: () => http.get('/api/waitlist/count'),
};
