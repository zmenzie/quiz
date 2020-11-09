import { Option } from './model.option';

export class Question {
    qid: number;
    question: string;
    option: Option[];
    constructor(data: any) { 
            data = data || {};
            this.qid = data.qid;
            this.question = data.question;
            this.option = [];
            this.option.forEach(o => {
                this.option.push(new Option(o));
            })
        }
}