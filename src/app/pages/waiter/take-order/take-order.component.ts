import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WaiterService } from '../waiter.service';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.scss']
})
export class TakeOrderComponent implements OnInit {

  takeOrderForm: FormGroup;
  public allItemDetails: Array<any> = [];
  constructor(private fb: FormBuilder, private _waiterService: WaiterService) { }

  ngOnInit() {
    this.getAllItemDetails();
  }

  getAllItemDetails() {
    this._waiterService.getAllItemsDetails().subscribe(
      data => {
        console.log(data);
        for (const item of (data as any)) {
          this.allItemDetails.push(item);
        }
        console.log(this.allItemDetails);
      }
    );
  }

  autoSearchFunction($event) {
    console.log("into autoSearchFunction ");
    // console.log(event);
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

}
