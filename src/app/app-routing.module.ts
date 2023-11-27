import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PolicyModule } from './policy/policy.module';
import { PolicyComponent } from './policy/policy.component';

const routes: Routes = [
  {path: '', loadChildren: ()=>import('./public/public.module').then((m)=>m.PublicModule),

  },

  {path: 'client', loadChildren: ()=>import('./client/client.module').then((m)=>m.ClientModule),
  
  },

  {path: 'policy', loadChildren: ()=>import('./policy/policy.module').then((m)=>m.PolicyModule),
  
  },

  
  {path: 'policy1', loadChildren: ()=>import('./policy1/policy1.module').then((m)=>m.Policy1Module),
  
  },

  {path: 'policy2', loadChildren: ()=>import('./policy2/policy2.module').then((m)=>m.Policy2Module),
  
  },

  {path: 'policy3', loadChildren: ()=>import('./policy3/policy3.module').then((m)=>m.Policy3Module),
  
  },

  {path: 'policy4', loadChildren: ()=>import('./policy4/policy4.module').then((m)=>m.Policy4Module),
  
  },


  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'policy',
    component: PolicyComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
