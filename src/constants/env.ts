import Constants from 'expo-constants';

/**
 * Centralized, type-safe environment configuration.
 *
 * Client environment variables must be prefixed with `EXPO_PUBLIC_` in `.env`
 * so Expo CLI can inline them at build/bundling time.
 */
export const ENV = {
  /**
   * App environment (e.g. 'development', 'staging', 'production')
   */
  APP_ENV: (process.env.EXPO_PUBLIC_APP_ENV || 'development') as
    | 'development'
    | 'staging'
    | 'production',

  /**
   * Base API URL
   */
  API_URL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api',

  /**
   * Feature flags
   */
  ENABLE_ANALYTICS: process.env.EXPO_PUBLIC_ENABLE_ANALYTICS === 'true',

  /**
   * Environment flags
   */
  IS_DEV: (process.env.EXPO_PUBLIC_APP_ENV || 'development') === 'development',
  IS_PROD: process.env.EXPO_PUBLIC_APP_ENV === 'production',

  /**
   * Dynamic app metadata from app.config.ts
   */
  APP_NAME: Constants.expoConfig?.name || 'wellness-partner',
  APP_VERSION: Constants.expoConfig?.version || '1.0.0',
  APP_SLUG: Constants.expoConfig?.slug || 'wellness-partner',
  APP_SCHEME: Constants.expoConfig?.scheme || 'wellnesspartner',
  EXTRA: Constants.expoConfig?.extra || {},
} as const;

export default ENV;
