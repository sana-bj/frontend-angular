import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { ShopComponent } from './components/shop/shop.component';
import { SingleProductComponent } from './components/shop/single-product/single-product.component';
import { AddProductComponent } from './components/shop/add-product/add-product.component';
import { EditProductComponent } from './components/shop/edit-product/edit-product.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { HeaderPageComponent } from './components/partials/header-page/header-page.component';
import { AddToCartModalComponent } from './components/partials/modal/add-to-cart-modal/add-to-cart-modal.component';
import { QuickViewModalComponent } from './components/partials/modal/quick-view-modal/quick-view-modal.component';
import { DeleteProductModalComponent } from './components/partials/modal/delete-product-modal/delete-product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    ShopComponent,
    SingleProductComponent,
    AddProductComponent,
    EditProductComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HeaderPageComponent,
    AddToCartModalComponent,
    QuickViewModalComponent,
    DeleteProductModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
