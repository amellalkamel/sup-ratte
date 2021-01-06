import { Column, Entity , PrimaryGeneratedColumn,OneToMany } from "typeorm"
import { Produit } from "./Produit";
import { SousCategorie } from "./SousCategorie";

@Entity()
export class Categorie {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nomCategorie:string

    @OneToMany(() => Produit , produit => produit.categorie)
    produit : Produit[];

    @OneToMany(()=> SousCategorie, soucategorie => soucategorie.categorie)
    soucategorie: SousCategorie[]
}