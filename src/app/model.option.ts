export class Option {
    oid: number;
    text: string;
    isAnswer: boolean;
    constructor(data: any) {
        data = data || {}; 
        this.oid = data.oid;
        this.text = data.text;
        this.isAnswer = data.isAnswer;
    }
}