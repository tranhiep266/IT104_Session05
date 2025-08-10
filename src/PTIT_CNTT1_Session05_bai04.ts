class Vehicle04{
    readonly id:number;
    name:string;
    year:number;
    company:string;
    constructor(id:number,name:string,year:number,company:string){
        this.id=id;
        this.name=name;
        this.year=year;
        this.company=company;
    }
}
const vehicle104=new Vehicle04(1,"oto",2000,"Toyota");
const vehicle204=new Vehicle04(2,"xemay",2000,"Yamaha");
console.log(vehicle104);
console.log(vehicle204);
