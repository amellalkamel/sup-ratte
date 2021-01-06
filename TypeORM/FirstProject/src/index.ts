import "reflect-metadata";
import {createConnection} from "typeorm";
import { Produit } from "./entity/Produit" ;
import { Categorie } from "./entity/Categorie";

createConnection().then(async connection => {
    const categorie = new Categorie()
    console.log("inserting new categorie into database")
    categorie.nomCategorie="Epicrie"
    await connection.manager.save(categorie)
    console.log("saved a new categirie with id: "+categorie.id)
    
    const categories =await connection.manager.find(Categorie)
    console.log("Loding categories", categories)
    
    }).catch(error => console.log(error))

// createConnection().then( async connection => {
//     console.log("inserting new produit into database")
//     const produit = new Produit();
    
//     produit.nomProduit="condia"
//     produit.prix=100.0
//     produit.quantite=10
//     produit.image="https://www.tchinlait.com/file/img/produits/produits-candia-algerie-Lait-partiellement-AecrAemAe-dAelactosAe..png"
//     await connection.manager.save(produit)
//     console.log("saved a new product with id: "+produit.id)

//     console.log("Loading product from the database...");
//     const produits = await connection.manager.find(Produit);
//     console.log("Loaded products: ", produits);
// }).catch(error => console.log(error))


