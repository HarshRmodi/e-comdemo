export class ShopList {
    message!: string;
    data: Array<Shop>
    constructor() {
        this.data = new Array<Shop>();
    }
}

export class Shop {
    id!: string;
    name!: string;
    bgImage!: string;
    logo!: string;
    location: Location
    rating: Rating
    open!: number;
    close!: number;
    desc!: string;
    isLiked!: boolean;

    constructor() {
        this.location= new Location();
        this.rating = new Rating();
    }
}

export class Location {
    type!: string
    coordinates: Array<number>
    constructor() {
        this.coordinates = new Array<number>();
    }
}

export class Rating {
    $numberDecimal!: number
    constructor() { }
}