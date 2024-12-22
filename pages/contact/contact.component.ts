import { Component } from '@angular/core';
import { CommonServiceService } from '../../service/common-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormControlDirective, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private common:CommonServiceService){

  }
  book:any=['kai','kkkk','jai'];

}
