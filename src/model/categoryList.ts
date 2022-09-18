export class CategoryList {
    data: Array<Category>
    message!: string
    constructor() {
        this.data = new Array<Category>();
    }
}

export class Category {
    id!: string
    name!: string
    richDescription!: string
    image!: string
    categoryId!: string
    deleted!: boolean
    //extra
    isSelected!: boolean

    constructor() {

    }
}