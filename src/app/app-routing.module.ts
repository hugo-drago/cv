import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathologiesComponent } from './components/pathologies/pathologies.component';
import { MainComponent } from './components/main/main.component';
import { MainCvComponent } from './components/main-cv/main-cv.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cv', component: MainCvComponent },
  { path: 'patologias', component: PathologiesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
