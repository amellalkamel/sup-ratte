import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { SousCategorie } from "./SousCategorie"
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

    @ManyToOne(() => SousCategorie, souscategorie => souscategorie.produit)
    souscategorie : SousCategorie
}