import { Entity,Column,PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Categorie } from "./Categorie";

@Entity()
export class SousCategorie {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nomSouCategorie:string

    @ManyToOne(() => Categorie , categorie => categorie.soucategorie)
    categorie:Categorie

}