export class Option {
    text: string;
    isAnswer: boolean;
    constructor(data: any) {
        data = data || {}; 
        this.text = data.text;
        this.isAnswer = data.isAnswer;
    }
}