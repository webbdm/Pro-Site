export class Jobs {
    constructor(
        public id: number,
        public user_id: number,
        public employer: string,
        public start_date: any,
        public end_date: any,
        public bio: string) {
    }
}