import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Shop } from 'src/model/shop';
import { VendorList } from 'src/model/vendorList';
import { ShopService } from 'src/service/shop.service';
declare var google: any;

@Component({
  selector: 'app-shop-add',
  templateUrl: './shop-add.component.html',
  styleUrls: ['./shop-add.component.css']
})
export class ShopAddComponent implements OnInit {

  public shopObj: Shop = new Shop();
  public categorylist: any;
  public vendorlist: VendorList = new VendorList();
  public formattedaddress = " ";
  public options = {
    componentRestrictions: {
      country: ["AU"]
    }
  }

  constructor(public _activeModal: NgbActiveModal,
    private _shopService: ShopService,
    private _spinnerService: NgxSpinnerService,
    private _toastrService: ToastrService
  ) { }

  async ngOnInit() {
    this.categorylist = (await this._shopService.getCategoryList())?.data;
    this.vendorlist = (await this._shopService.getVendorList());
  }


  public AddressChange(address: any) {
    //setting address from API to local variable
    this.formattedaddress = address.formatted_address
  }

  public async onSubmit(form: NgForm) {
    try {
      if (form.valid) {
        this._spinnerService.show();
        let response = await this._shopService.shopRequest(this.shopObj);
        if (response) {

          this._activeModal.dismiss();
          this._spinnerService.hide();
          this._toastrService.success('Shop has been added successfully!', 'Shop!');
        }
      }
      else {
        Object.keys(form.controls).forEach(key => {
          form.controls[key].markAsTouched();
        });
      }
    }
    catch (error: any) {
      this._spinnerService.hide();
      this._toastrService.error(error.error.error, error.error.message);
      console.error(error);
    }
  }

}
