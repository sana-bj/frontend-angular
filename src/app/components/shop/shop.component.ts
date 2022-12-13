import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'node-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  rows : any;
  constructor(private product :ProductService) { }
 
  ngOnInit(): void {

    this.list();
  }

  list(){

    this.product.list().subscribe(data => {
      console.log(data);
      this.rows = data;
      return data ;
    })

  }
}