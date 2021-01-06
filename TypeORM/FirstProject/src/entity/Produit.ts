import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Categorie } from "./Categorie"
@Entity()
export class Produit {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nomProduit:string

    @Column("double precision")
    prix:number

    @Column()
    quantite:number

    @Column()
    image:string

    @ManyToOne(() => Categorie, categorie => categorie.produit)
    categorie : Categorie
}