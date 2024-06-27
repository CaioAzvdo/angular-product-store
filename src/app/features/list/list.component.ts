import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: any[] = [];
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.httpClient.get<any>('/api/products').subscribe((products: any) => {
      this.products = products;
    });
  }

}
