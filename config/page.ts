

export interface Page {
  name: string;
  component: any;
}

export interface RoutesConfigType {
  [key: string]: Page;
}

export const pages = {
  // splashScreen: {
  //   name: 'com.mappy.SplashScreen',
  //   component: SplashScreen,
  // },
};
