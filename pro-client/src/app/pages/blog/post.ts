// export interface IPost {
//     id: number;
//     title: string;
//     description: string;
//     img_url: string;
//     trip_date: string;
//     park_id: number;
//     campsite_id: number;
// }

export class Post {
    constructor(
        public id: number,
        public title: string,
        public body: string
    ) {
    }
}