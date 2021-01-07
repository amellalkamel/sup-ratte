import { Entity,Column,PrimaryGeneratedColumn, ManyToOne , OneToMany } from "typeorm";
import { Categorie } from "./Categorie";
import { Produit } from "./Produit";

@Entity()
export class SousCategorie {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nomSouCategorie:string

    @Column()
    img:string

    @ManyToOne(() => Categorie , categorie => categorie.soucategorie)
    categorie:Categorie

    @OneToMany(() => Produit , produit => produit.souscategorie)
    produit: Produit[]
}