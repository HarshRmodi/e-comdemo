export class VendorList {
    message!: string;
    data: Array<Vendor>
    constructor() {
        this.data = new Array<Vendor>();
    }
}

export class Vendor {

    id!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    vendorId!: string;
    constructor() { }
}
