import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../component/table/table.component';
import { HomePageDirective } from '../../directives/home-page.directive';
import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from '../../pages/product-page/product-page.component';



@NgModule({
  declarations: [
    TableComponent,
    HomePageDirective,
  ],
  imports: [
    CommonModule,
     FormsModule,
    TableComponent,
    HomePageDirective,
    NgModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TableComponent,
    HomePageDirective,
    ProductPageComponent,
    NgModule

  ]
})
export class ShareModule { }
