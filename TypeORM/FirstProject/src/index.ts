import "reflect-metadata";

/* pour mon projet */

import {createConnection} from "typeorm";
import { Produit } from "./entity/Produit" ;
import { Categorie } from "./entity/Categorie";
import { SousCategorie } from "./entity/SousCategorie";

createConnection().then(async connection => {

    /* add produit1 */
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

    /* add produit2 */
    const produit2 = new Produit()
    produit2.nomProduit = "condia choco"
    produit2.prix=45.0
    produit2.quantite = 12
    produit2.image ="https://oneshop.dz/img/p/6/1/4/5/6145-thickbox_default.jpg"
    await connection.manager.save(produit2)
    console.log("saved a new product with id: "+produit2.id)
    
    /* add sous categorie1 */
    const soucategorie = new SousCategorie()
    soucategorie.nomSouCategorie="LAIT & BOISSONS LACTEES"
    soucategorie.img="https://th.bing.com/th/id/OIP.KVSzHEvb6IMfkq7uz-hOHgHaEK?pid=Api&rs=1"
    soucategorie.produit=[produit,produit2]
    await connection.manager.save(soucategorie)
    console.log("saved a new soucategorie with id: "+soucategorie.id)

    /* add sous categorie1 */
    const soucategorie2 = new SousCategorie()
    soucategorie2.nomSouCategorie="YAOURT & CREME DESSERT"
    soucategorie2.img="https://www.amehasle.com/media/creme_dessert_vanille__043562300_1656_13092016.jpg"
    await connection.manager.save(soucategorie2)
    console.log("saved a new soucategorie with id: "+soucategorie2.id)

    /* add categorie */
    const categorie = new Categorie()
    console.log("inserting new categorie into database")
    categorie.nomCategorie="Crèmerie & Produits Laitiers"
    categorie.img="https://i1.wp.com/www.cascadedz.com/wp-content/uploads/2020/05/produits-laitiers-lait-yaourt-fromage.jpg?fit=768%2C512&ssl=1"
    categorie.soucategorie=[soucategorie,soucategorie2]
    await connection.manager.save(categorie)
    console.log("saved a new categirie with id: "+categorie.id)
    
    const categories =await connection.manager.find(Categorie)
    console.log("Loding categories", categories)
    
    }).catch(error => console.log(error))




