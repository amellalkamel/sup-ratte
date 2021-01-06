import { Column, Entity , PrimaryGeneratedColumn,OneToMany } from "typeorm"
import { Produit } from "./Produit";

@Entity()
export class Categorie {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nomCategorie:string

    // @OneToMany(() => Produit , produit => produit.categorie)
    // produit = Produit;
}