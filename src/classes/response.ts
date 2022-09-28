export class Resp{
    data: any
    status: number
    constructor(data, status) {
        this.data = data
        this.status = status
    }
}