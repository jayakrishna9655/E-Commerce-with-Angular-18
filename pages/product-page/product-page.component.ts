import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../service/common-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {


    constructor(private employe_data_from_service:CommonServiceService){}
    geted_data:any;
    ngOnInit(): void {
      this.get_employe_data()
    }
    
    get_employe_data(){
      this.employe_data_from_service.getemployee().subscribe(data=>{
        this.geted_data=data;
        console.log(this.geted_data)
      })
    }
    
    
    }


