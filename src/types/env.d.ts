declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * Application execution environment ('development' | 'staging' | 'production')
     */
    EXPO_PUBLIC_APP_ENV?: 'development' | 'staging' | 'production';

    /**
     * Backend API base URL
     */
    EXPO_PUBLIC_API_URL?: string;

    /**
     * Feature flag to enable/disable analytics
     */
    EXPO_PUBLIC_ENABLE_ANALYTICS?: string;

    /**
     * App configuration variables used at build/runtime in app.config.ts
     */
    APP_NAME?: string;
    APP_SLUG?: string;
    APP_SCHEME?: string;
    APP_VERSION?: string;
    ANDROID_PACKAGE?: string;
    IOS_BUNDLE_IDENTIFIER?: string;
  }
}
