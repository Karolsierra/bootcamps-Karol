export class Student{

    constructor(id: number, nom: string, edad:number, ciudad:string){
        this.id = id;
        this.nombre = nom;
        this.edad = edad;
        this.ciudad = ciudad
    }

    id: number;
    nombre: string;
    edad: number;
    ciudad: string
}