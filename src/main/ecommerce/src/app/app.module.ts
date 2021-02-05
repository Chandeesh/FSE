import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { UserService } from './service/user.service';
import { ToasterService } from './toaster/toaster.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent } from './products/products.component';
import { ConfirmUserComponent } from './confirm-user/confirm-user.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { SellProductsComponent } from './sell-products/sell-products.component';
import { CartComponent } from './cart/cart.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { AdminComponent } from './admin/admin.component';
import { CustomersComponent } from './customers/customers.component';
import { ManagecomplaintsComponent } from './managecomplaints/managecomplaints.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginUserComponent,
    ProductsComponent,
    ConfirmUserComponent,
    ViewProductsComponent,
    SellProductsComponent,
    CartComponent,
    ComplaintsComponent,
    AdminComponent,
    CustomersComponent,
    ManagecomplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [UserService, ToasterService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
