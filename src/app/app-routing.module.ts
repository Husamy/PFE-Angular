import { AdminInterfaceComponent } from './pages/organisations/admin-interface/admin-interface.component';
import { HomeHeroComponent } from './pages/home-hero/home-hero.component';
import { PublicDocumentsComponent } from './pages/documents/public-documents/public-documents.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddDocumentComponent } from './pages/documents/add-document/add-document.component';
import { HomeComponent } from './pages/documents/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignComponent } from './pages/sign/sign.component';
import { LoginGuardGuard } from './login-guard.guard';
import { AppComponent } from './app.component';
import { OrganisationComponent } from './pages/organisations/organisation/organisation.component';
import { JoinRequestsComponent } from './pages/join-requests/join-requests.component';

const routes: Routes = [
  {path:'',component:HomeHeroComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent },//
  {path:'sign',component:SignComponent},
  {path:'dashboard',component:HomeComponent ,canActivate:[AuthGuard]},
  {path:'add',component:AddDocumentComponent ,canActivate:[AuthGuard]},
  {path:'request',component:RequestsComponent ,canActivate:[AuthGuard]},
  {path:'public',component:PublicDocumentsComponent ,canActivate:[AuthGuard]},
  {path:'organisation',component:OrganisationComponent, canActivate:[AuthGuard]},
  {path:'Requests',component:JoinRequestsComponent, canActivate:[AuthGuard]},
  {path:'admin',component:AdminInterfaceComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }