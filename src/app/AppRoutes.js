import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const ProductForm = lazy(() => import('./pages/depot/ProductForm'));
const ProductList = lazy(() => import('./pages/depot/ProductList'));
const ProductBoutiqueList = lazy(() => import('./pages/boutique/ProductBoutiqueList'));

const ApprovDepotForm = lazy(() => import('./pages/depot/ApprovDepotForm'));
const ApprovBoutiqueForm = lazy(() => import('./pages/boutique/ApprovBoutiqueForm'));
const ProductVente = lazy(() => import('./pages/vente/ProductVente'));

const CategorieForm = lazy(() => import('./pages/categorie/CategorieForm'));
const CategorieList = lazy(() => import('./pages/categorie/CategorieList'));

const UserForm = lazy(() => import('./pages/user/UserForm'));
const UserList = lazy(() => import('./pages/user/UserList'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));



class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route path="/product/form" component={ ProductForm } />
          <Route path="/product/list" component={ ProductList } />
          <Route path="/boutique/list" component={ ProductBoutiqueList } />

          <Route path="/product/approv" component={ ApprovDepotForm } />
          <Route path="/boutique/approv" component={ ApprovBoutiqueForm } />

          <Route path="/vente/vendre" component={ ProductVente } />

          <Route path="/categorie/form" component={ CategorieForm } />
          <Route path="/categorie/list" component={ CategorieList } />

          <Route path="/user/form" component={ UserForm } />
          <Route path="/user/list" component={ UserList } />

          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />

          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />

          <Route path="/icons/mdi" component={ Mdi } />

          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;