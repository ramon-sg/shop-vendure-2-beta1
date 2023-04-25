export const extensionRoutes = [  {
    path: 'extensions/greet',
    loadChildren: () => import('./extensions/e5b00b85e3c1e554ca026d4a956fc8d81bf11cd8513ab232630bff9a90d094cd/greeter.module').then(m => m.GreeterModule),
  }];
