export class Product {
    productId: string;
    productName: string;
    productPrice: number;

    constructor() {
        this.productId = null;
        this.productName = null;
        this.productPrice = null;
    }

    static get getProducts(): Product[] {
        const products = [
            { productId: '1', productName: 'Galaxy Note10+ 5G', productPrice: 1299.99 },
            { productId: '2', productName: '7T Pro 5G McLaren', productPrice: 899.99 },
            { productId: '3', productName: 'iPhone 11 Pro Max', productPrice: 1099.99 },
            { productId: '4', productName: 'iPhone 11 Pro', productPrice: 999.99 },
            { productId: '5', productName: 'iPhone 11', productPrice: 699.99 },
            { productId: '6', productName: 'Galaxy Note10', productPrice: 949.99 },
            { productId: '7', productName: 'Galaxy Note10+', productPrice: 1099.99 },
        ] as Product[];
        return products;
    }
}
