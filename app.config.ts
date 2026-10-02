import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  const appEnv = process.env.EXPO_PUBLIC_APP_ENV || 'development';
  const isProd = appEnv === 'production';

  return {
    ...config,
    name: process.env.APP_NAME || config.name || 'wellness-partner',
    slug: process.env.APP_SLUG || config.slug || 'wellness-partner',
    version: process.env.APP_VERSION || config.version || '1.0.0',
    scheme: process.env.APP_SCHEME || config.scheme || 'wellnesspartner',
    ios: {
      ...config.ios,
      bundleIdentifier:
        process.env.IOS_BUNDLE_IDENTIFIER ||
        config.ios?.bundleIdentifier ||
        'com.anonymous.wellnesspartner',
    },
    android: {
      ...config.android,
      package:
        process.env.ANDROID_PACKAGE ||
        config.android?.package ||
        'com.anonymous.wellnesspartner',
    },
    extra: {
      ...config.extra,
      appEnv,
      isProduction: isProd,
      apiUrl: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api',
    },
  };
};
