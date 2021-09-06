import Vue from 'vue';
import Router from 'vue-router';
import Authorize from "./components/Authorize";
import Dashboard from "./components/Dashboard";
import VotingDashboard from "./components/VotingDashboard";
import AdminPage from "./components/AdminPage";
import Login from "./components/authorize/Login";
// import Register from "./components/authorize/Register";
// import Verify from "./components/authorize/Verify";

Vue.use(Router);

export const router = new Router({
        mode: 'history',
        routes: [{
            path: '/auth',
            component: Authorize,
            children: [{
                path: '/login',
                name: 'login',
                component: Login
            }
            // {
            //     path: '/register',
            //     name: 'register',
            //     component: Register
            // },
            //     {
            //
            //     path: '/signup/verify/',
            //     name: 'verifyEmail',
            //     component: Verify
            // }
            ]
        },

              {
             path: '/dashboard',
             component: Dashboard,
        },
            {
             path: '/admin-page',
             component: AdminPage,
            },
            {
             path: '/',
             component: Dashboard
             redirect: '/dashboard'
            },
            {
             path: '/voting',
             component: VotingDashboard
            }

        //     path: '/voting',
        //     component: VotingDashboard
        // }, {
        //     path: '/admin',
        //     component: AdminPage
        // }

        ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/dashboard', '/notfound'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('voting_app_user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});