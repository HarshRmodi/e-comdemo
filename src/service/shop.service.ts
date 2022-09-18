import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoryList } from 'src/model/categoryList';
import { Shop } from 'src/model/shop';
import { ShopList } from 'src/model/shopList';
import { VendorList } from 'src/model/vendorList';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  public async getCategoryList(): Promise<CategoryList> {
    return await this.http.get(environment.apiUrl + "category?skip=0&limit=20")
      .toPromise() as CategoryList;
  }

  public async getShopList(categoryId: string): Promise<ShopList> {
    let url = 'shop?skip=0&limit=20';
    if (categoryId)
      url += '&category=' + categoryId;
    return await this.http.get(environment.apiUrl + url).
      toPromise() as ShopList;
  }

  public async getVendorList(): Promise<VendorList> {
    return await this.http.get(environment.apiUrl + "vendor?skip=0&limit=20")
      .toPromise() as VendorList;
  }

  public async shopRequest(shopObj: Shop) {
    return await this.http.post(environment.apiUrl + "shop", shopObj)
      .toPromise() as any;
  }

}
