export class IProduct {
    constructor(
        public productId: number,
        public productCode:string,
        public productName: string,
        public description: string,
        public releaseDate: string,
        public price: number,
        public starRating: number,
        public imageUrl: string
    ) { }
}