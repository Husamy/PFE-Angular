import { DocumentLogsComponent } from './pages/logs/document-logs/document-logs.component';
import { AdminInterfaceComponent } from './pages/organisations/admin-interface/admin-interface.component';
import { HomeHeroComponent } from './pages/home-hero/home-hero.component';
import { PublicDocumentsComponent } from './pages/documents/public-documents/public-documents.component';
import { RequestsComponent } from './pages/documents/requests/requests.component';
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
import { ListDocumentsComponent } from './pages/documents/list-documents/list-documents.component';
import { AllDocumentsComponent } from './pages/documents/all-documents/all-documents.component';
import { AddOrganisationComponent } from './pages/organisations/add-organisation/add-organisation.component';
import { CreateOrganisationComponent } from './pages/organisations/create-organisation/create-organisation.component';
import { MembresComponent } from './pages/organisations/membres/membres.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserLogsComponent } from './pages/logs/user-logs/user-logs.component';

const routes: Routes = [
  {path:'',component:HomeHeroComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent },//
  {path:'sign',component:SignComponent},
  { path: 'profile/:id', component: ProfileComponent ,canActivate:[AuthGuard]},
    {path:'organisation',
  canActivate:[AuthGuard],
  children:[
    {path:'',component:OrganisationComponent},
    {path:'join',component:AddOrganisationComponent},
    {path:'create',component:CreateOrganisationComponent},
    {path:'admin',component:AdminInterfaceComponent,},
    {path:'membres',component:MembresComponent}
  ]},
  {path:'documents',
   canActivate:[AuthGuard],
   children:[
    {path:'',component:HomeComponent},
    {path:'Mydocuments',component:ListDocumentsComponent},
    {path:'SharedDocuments',component:PublicDocumentsComponent},
    {path:'OrganisationDocuments',component:AllDocumentsComponent},
    {path:'SigingRequest',component:RequestsComponent, },
   ]
  },
  {path:'logs',
canActivate:[AuthGuard],
children:[
  {path:'',component:UserLogsComponent},
  {path:'user',component:UserLogsComponent},
  {path:'doc',component:DocumentLogsComponent}
]},
  {path:'admin',component:AdminInterfaceComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }