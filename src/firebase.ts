import { FIREBASE_CONFIG } from '@constants';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp(FIREBASE_CONFIG);

export const auth = getAuth(app);
