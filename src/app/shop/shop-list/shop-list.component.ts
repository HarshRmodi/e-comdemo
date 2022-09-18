import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Category, CategoryList } from 'src/model/categoryList';
import { ShopList } from 'src/model/shopList';
import { ShopService } from 'src/service/shop.service';
import { ShopAddComponent } from '../shop-add/shop-add.component';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  public categorylist: CategoryList = new CategoryList();
  public shopFilterList: ShopList = new ShopList();
  public isSelected: boolean = true;

  constructor(private _shopService: ShopService,
    public _sanitizer: DomSanitizer,
    private _spinnerService: NgxSpinnerService,
    private _modalService: NgbModal) { }

  async ngOnInit() {
    await this.defaultMethodsLoad();
  }

  public async defaultMethodsLoad() {
    try {
      this.categorylist = (await this._shopService.getCategoryList());
      this.categorylist.data.forEach((x: Category) => { x.isSelected = false; });
      this.filterShop();
    } catch (error) {
      console.error(error)
    }

  }

  public async filterShop(item?: any) {
    try {
      this._spinnerService.show();
      if (item) {
        this.isSelected = false;
        this.categorylist.data.forEach((x: Category) => { x.id == item.id ? x.isSelected = true : x.isSelected = false; });
      }
      else {
        this.categorylist.data.forEach((x: Category) => { x.isSelected = false; });
        this.isSelected = true;

      }
      this.shopFilterList = (await this._shopService.getShopList(item?.id));
      this._spinnerService.hide();
    } catch (error) {
      console.error(error)
      this._spinnerService.hide();
    }

  }

  public sanitizeURL(url: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  public imageURL() {
    return this.sanitizeURL("https://diamdna.com/Vision360.html?d=fl-116&sr=-30&s=30");
  }

  public openModal() {
    const modalRef = this._modalService.open(ShopAddComponent);
  }
}
