export class Category {
    id:number;
    name='';

    constructor(values:Object={}){
        Object.assign(values,this);
    }
}
