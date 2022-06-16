import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { AddProductComponent } from './components/shop/add-product/add-product.component';
import { EditProductComponent } from './components/shop/edit-product/edit-product.component';
import { ShopComponent } from './components/shop/shop.component';
import { SingleProductComponent } from './components/shop/single-product/single-product.component';

const routes: Routes = [

  {path: 'signup', component:SigninComponent},
  {path: 'login', component:LoginComponent},
  {path: 'shop', component:ShopComponent},
  {path: 'add-product', component:AddProductComponent},
  {path: 'single-product/:id', component:SingleProductComponent},
  {path: 'edit-product/:id', component:EditProductComponent},
  {path: '**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
