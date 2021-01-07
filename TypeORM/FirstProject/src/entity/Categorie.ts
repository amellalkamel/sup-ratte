import { Column, Entity , PrimaryGeneratedColumn,OneToMany } from "typeorm"
import { SousCategorie } from "./SousCategorie";

@Entity()
export class Categorie {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nomCategorie:string

    @Column()
    img:string

    @OneToMany(()=> SousCategorie, soucategorie => soucategorie.categorie)
    soucategorie: SousCategorie[]
}