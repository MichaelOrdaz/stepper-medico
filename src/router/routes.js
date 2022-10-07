import routeNames from './routeNames';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainPage.vue'),
    children: [
      { path: '', name: routeNames.START, component: () => import('pages/IndexHome.vue') },
      { path: 'step-2', name: routeNames.STEP_2, component: () => import('pages/StepTwo.vue') },
      { path: 'step-3', name: routeNames.STEP_3, component: () => import('pages/StepThree.vue') },
      { path: 'step-4', name: routeNames.STEP_4, component: () => import('pages/StepFour.vue') },
      { path: 'last-step', name: routeNames.STEP_5, component: () => import('pages/StepFive.vue') },
      { path: 'step-finish', name: routeNames.STEP_FINISH, component: () => import('pages/StepFinish.vue') },
    ],
  },
  {
    path: '/test',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
