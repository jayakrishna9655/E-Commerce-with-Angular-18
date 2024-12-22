import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: 'productpage',
    loadComponent:()=> import('../pages/product-page/product-page.component')
    .then((c)=> c . ProductPageComponent)
},
{
    path:'',
    redirectTo:'Home',
    pathMatch:'full'
},
{
    path:'Login',
    loadComponent:()=>import('../login_and_signin/login/login.component')
    .then((c)=>c.LoginComponent)
},
{
    path:'Sign',
    loadComponent:()=>import('../login_and_signin/sign/sign.component')
    .then((c)=>c.SignComponent)
},
{
    path:'Home',
    loadComponent:()=>import('../pages/home/home.component')
    .then((c)=>c.HomeComponent)
},
{
    path:'Contact',
    loadComponent:()=>import('../pages/contact/contact.component')
    .then((c)=>c.ContactComponent)
},
{
    path:'About',
    loadComponent:()=>import('../pages/about/about.component')
    .then((c)=>c.AboutComponent)
},
{
    path:'Product',
    loadComponent:()=>import('../pages/product-page/product-page.component')
    .then((c)=>c.ProductPageComponent)
},
// { path: '**', component: NotFoundComponent },
];
