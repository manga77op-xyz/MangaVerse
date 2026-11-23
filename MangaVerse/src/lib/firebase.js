import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// MangaVerse temporarily shares the AnimeVerse Firebase project.
const firebaseConfig = {
  apiKey: "AIzaSyCcjV_Wt1vDinAtaNmqe-jYaiEyO9zr7xY",
  authDomain: "animeverse-238a8.firebaseapp.com",
  projectId: "animeverse-238a8",
  storageBucket: "animeverse-238a8.firebasestorage.app",
  messagingSenderId: "713669333030",
  appId: "1:713669333030:web:b242c2be0fe349eb4516e7",
  measurementId: "G-QMXBHESYJP"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Analytics is optional and only initializes in supported browser environments.
export const analyticsReady = typeof window !== 'undefined'
  ? isSupported().then((supported) => supported ? getAnalytics(app) : null).catch(() => null)
  : Promise.resolve(null);

export const firebaseReady = true;
