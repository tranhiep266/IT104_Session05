class Vehicle01{
    name:string;
    year:number;
    company:string;
    constructor(name:string,year:number,company:string){
        this.name=name;
        this.year=year;
        this.company=company;
    }
}
const vehicle1=new Vehicle01("oto",2000,"Toyota");
const vehicle2=new Vehicle01("xemay",2000,"Yamaha");
console.log(vehicle1);
console.log(vehicle2);
