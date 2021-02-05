import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ProductsComponent } from './products/products.component';
import { ConfirmUserComponent } from './confirm-user/confirm-user.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewProductsComponent } from './view-products/view-products.component';
import { SellProductsComponent } from './sell-products/sell-products.component';
import { CartComponent } from './cart/cart.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { AdminComponent } from './admin/admin.component';
import { CustomersComponent } from './customers/customers.component';
import { ManagecomplaintsComponent } from './managecomplaints/managecomplaints.component';

const routes: Routes = [
  { path: 'registeruser', component: RegisterUserComponent },
  { path: 'loginuser', component: LoginUserComponent },
  { path: '', component: LoginUserComponent },
  { path: 'confirmuser', component: ConfirmUserComponent },
  { path: 'admin', component: AdminComponent,canActivate: [AuthGuard] },
  { path: 'customers', component: CustomersComponent },
  { path: 'managecomplaints', component: ManagecomplaintsComponent },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'viewproducts', component: ViewProductsComponent, canActivate: [AuthGuard] },
      { path: 'sellproducts', component: SellProductsComponent, canActivate: [AuthGuard] },
      { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
      { path: 'complaints', component: ComplaintsComponent, canActivate: [AuthGuard] }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterUserComponent, LoginUserComponent
  , ProductsComponent, ViewProductsComponent, SellProductsComponent];
