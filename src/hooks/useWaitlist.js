import { useState } from 'react';
import { waitlistApi } from '../services/api';
import { isValidEmail } from '../utils/validators';
import { WAITLIST_MESSAGES } from '../utils/constants';

export const useWaitlist = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    try {
      await waitlistApi.join(email);
      setStatus('success');
      setMessage(WAITLIST_MESSAGES.SUCCESS);
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage(err.message || WAITLIST_MESSAGES.ERROR);
    }
  };

  return { email, setEmail, status, message, submit };
};
