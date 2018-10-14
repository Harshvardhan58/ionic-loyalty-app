import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form';
import { IonicModule } from 'ionic-angular';
import { RegisterFormComponent } from './register-form/register-form';
import { ProfileViewComponent } from './profile-view/profile-view';
@NgModule({
	declarations: [LoginFormComponent,
    RegisterFormComponent,
    ProfileViewComponent],
	imports: [IonicModule],
	exports: [LoginFormComponent,
    RegisterFormComponent,
    ProfileViewComponent]
})
export class ComponentsModule {}
