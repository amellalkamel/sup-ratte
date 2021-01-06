import "reflect-metadata";
// import { createConnection } from "typeorm";
/* pour faire un test */
// import { Photo } from "./entity/Photo";
// import { User } from "./entity/User";
// createConnection().then(async connection => {
//     const photo1 = new Photo();
//     photo1.url = "me.jpg";
//     await connection.manager.save(photo1);
    
//     const photo2 = new Photo();
//     photo2.url = "me-and-bears.jpg";
//     await connection.manager.save(photo2);
    
//     const user = new User();
//     user.name = "John";
//     user.photos = [photo1, photo2];
//     await connection.manager.save(user);
// }).catch(error => console.log(error))

/* pour mon projet */

import {createConnection} from "typeorm";
import { Produit } from "./entity/Produit" ;
import { Categorie } from "./entity/Categorie";

createConnection().then(async connection => {
    console.log("inserting new produit into database")
    const produit = new Produit();
    
    produit.nomProduit="condia"
    produit.prix=100.0
    produit.quantite=10
    produit.image="https://www.tchinlait.com/file/img/produits/produits-candia-algerie-Lait-partiellement-AecrAemAe-dAelactosAe..png"
    await connection.manager.save(produit)
    console.log("saved a new product with id: "+produit.id)

    console.log("Loading product from the database...");
    const produits = await connection.manager.find(Produit);
    console.log("Loaded products: ", produits);

    const produit2 = new Produit()
    produit2.nomProduit = "condia choco"
    produit2.prix=45.0
    produit2.quantite = 12
    produit2.image ="https://oneshop.dz/img/p/6/1/4/5/6145-thickbox_default.jpg"
    await connection.manager.save(produit2)
    console.log("saved a new product with id: "+produit2.id)

    const categorie = new Categorie()
    console.log("inserting new categorie into database")
    categorie.nomCategorie="Produit Litiers"
    categorie.produit=[produit,produit2]
    await connection.manager.save(categorie)
    console.log("saved a new categirie with id: "+categorie.id)
    
    const categories =await connection.manager.find(Categorie)
    console.log("Loding categories", categories)
    
    }).catch(error => console.log(error))




