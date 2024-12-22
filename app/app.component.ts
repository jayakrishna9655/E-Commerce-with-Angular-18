import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators,  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutPageDirective } from '../directives/color-page.directive';
import { title } from 'process';
import { TitlePipe } from '../pipes/title.pipe';
import { TableComponent } from '../component/table/table.component';
import { ShareModule } from '../shared/share/share.module';
import { FormComponent } from '../form/form.component';
import { ListComponent } from '../list/list.component';
import { CarService } from '../service/car.service';
import { CommonServiceService } from '../service/common-service.service';
import { ViewPageComponent } from '../pages/view-page/view-page.component';
import { ChildComponent } from '../child/child.component';
import { LoginComponent } from '../login_and_signin/login/login.component';
import { SignComponent } from '../login_and_signin/sign/sign.component';
import { AboutComponent } from '../pages/about/about.component';
import { ProductPageComponent } from '../pages/product-page/product-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ 
    CommonModule,
    FormsModule, 
    AboutPageDirective,
  TitlePipe,
TableComponent,
FormComponent,
ListComponent,
ReactiveFormsModule,
RouterOutlet,
RouterLink,
RouterLinkActive,
ChildComponent,
FormComponent,
LoginComponent,
SignComponent,
AboutComponent,
ProductPageComponent,

],

}
)

export class AppComponent {

constructor(private common:CommonServiceService){}

login_form=new FormGroup({
  username: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(10)]),
  password: new FormControl('', [Validators.required]),
  
})
submit_form(){
  console.log(this.login_form.controls)
}
}

