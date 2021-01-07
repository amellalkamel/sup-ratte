import "reflect-metadata";

/* pour mon projet */

import {createConnection,getConnection} from "typeorm";
import { Produit } from "./entity/Produit" ;
import { Categorie } from "./entity/Categorie";
import { SousCategorie } from "./entity/SousCategorie";

createConnection().then(async connection => {

    /* add produit1 */
    // console.log("inserting new produit into database")
    // const produit = new Produit();
    
    // produit.nomProduit="condia"
    // produit.prix=100.0
    // produit.quantite=10
    // produit.image="https://www.tchinlait.com/file/img/produits/produits-candia-algerie-Lait-partiellement-AecrAemAe-dAelactosAe..png"
    // await connection.manager.save(produit)
    // console.log("saved a new product with id: "+produit.id)

    // console.log("Loading product from the database...");
    // const produits = await connection.manager.find(Produit);
    // console.log("Loaded products: ", produits);

    // /* add produit2 */
    // const produit2 = new Produit()
    // produit2.nomProduit = "condia choco"
    // produit2.prix=45.0
    // produit2.quantite = 12
    // produit2.image ="https://oneshop.dz/img/p/6/1/4/5/6145-thickbox_default.jpg"
    // await connection.manager.save(produit2)
    // console.log("saved a new product with id: "+produit2.id)

    // /* add sous categorie1 */
    // const soucategorie = new SousCategorie()
    // soucategorie.nomSouCategorie="LAIT & BOISSONS LACTEES"
    // soucategorie.img="https://th.bing.com/th/id/OIP.KVSzHEvb6IMfkq7uz-hOHgHaEK?pid=Api&rs=1"
    // soucategorie.produit=[produit,produit2]
    // await connection.manager.save(soucategorie)
    // console.log("saved a new soucategorie with id: "+soucategorie.id)

    // /* add sous categorie1 */
    // const soucategorie2 = new SousCategorie()
    // soucategorie2.nomSouCategorie="YAOURT & CREME DESSERT"
    // soucategorie2.img="https://www.amehasle.com/media/creme_dessert_vanille__043562300_1656_13092016.jpg"
    // await connection.manager.save(soucategorie2)
    // console.log("saved a new soucategorie with id: "+soucategorie2.id)

    /* add categorie */
    // const categorie = new Categorie()
    // console.log("inserting new categorie into database")
    // categorie.nomCategorie="Boissons"
    // categorie.img="https://www.focusgroupemedia.com/wp-content/uploads/2019/07/141016_boissons.jpg"
    // // categorie.soucategorie=[soucategorie,soucategorie2]
    // await connection.manager.save(categorie)
    // console.log("saved a new categirie with id: "+categorie.id)

    // /*add cate2 */
    // const categirie2 = new Categorie()
    // console.log("inserting new categorie into database")
    // categirie2.nomCategorie="Divers"
    // categirie2.img="https://www.francetvinfo.fr/image/75595uqmk-482b/1500/843/7196817.png"
    // // categorie.soucategorie=[soucategorie,soucategorie2]
    // await connection.manager.save(categirie2)
    // console.log("saved a new categirie with id: "+categirie2.id)
    
    // /*add cate3 */
    // const categirie3 = new Categorie()
    // console.log("inserting new categorie into database")
    // categirie3.nomCategorie="Entretien & Nettoyage"
    // categirie3.img="https://th.bing.com/th/id/OIP.dqjA20hEeVbPH32kpzmydgHaHa?pid=Api&rs=1"
    // // categorie.soucategorie=[soucategorie,soucategorie2]
    // await connection.manager.save(categirie3)
    // console.log("saved a new categirie with id: "+categirie3.id)

    // /*add cate4 */
    // const categirie4 = new Categorie()
    // console.log("inserting new categorie into database")
    // categirie4.nomCategorie="Epicerie"
    // categirie4.img="https://th.bing.com/th/id/OIP.cjL-9inS8f4JTaAH920gvAHaE8?pid=Api&rs=1"
    // // categorie.soucategorie=[soucategorie,soucategorie2]
    // await connection.manager.save(categirie4)
    // console.log("saved a new categirie with id: "+categirie4.id)

    // /*add cate5 */
    // const categirie5 = new Categorie()
    // console.log("inserting new categorie into database")
    // categirie5.nomCategorie="Hygiène & Beauté"
    // categirie5.img="https://pharmacie-mairie-bron.com/sites/default/files/beaute.jpg"
    // // categorie.soucategorie=[soucategorie,soucategorie2]
    // await connection.manager.save(categirie5)
    // console.log("saved a new categirie with id: "+categirie5.id)
    
    // /*add cate6 */
    // const categirie6 = new Categorie()
    // console.log("inserting new categorie into database")
    // categirie6.nomCategorie="Le Monde de Bébé"
    // categirie6.img="https://th.bing.com/th/id/OIP.S_7HERB_J4zL6JFbyOMf5gHaEK?w=272&h=180&c=7&o=5&pid=1.7"
    // // categorie.soucategorie=[soucategorie,soucategorie2]
    // await connection.manager.save(categirie6)
    // console.log("saved a new categirie with id: "+categirie6.id)

    // /*add cate7 */
    // const categirie7 = new Categorie()
    // console.log("inserting new categorie into database")
    // categirie7.nomCategorie="Surgelés"
    // categirie7.img="https://th.bing.com/th/id/OIP.dgOv--I3RqfHLLGKNZ13ZAHaE8?pid=Api&rs=1"
    // // categorie.soucategorie=[soucategorie,soucategorie2]
    // await connection.manager.save(categirie7)
    // console.log("saved a new categirie with id: "+categirie7.id)

    /*lister les categorie */
    // const categories =await connection.manager.findOne(Categorie)
    // const categories =await connection.manager.find(Categorie)

    // console.log("Loding categories", categories)
    const categorieBois = await getConnection() .createQueryBuilder(Categorie, "categorie") 
    .where("categorie.nomCategorie = :nomCategorie", { nomCategorie: "Crèmerie & Produits Laitiers" }) .getOne();

    console.log("Loding categories", categorieBois)

      /* add sous categorie1 */
    const soucategorie = new SousCategorie()
    soucategorie.nomSouCategorie="Beurre & Margarine"
    soucategorie.img="https://www.frc.ch/wp-content/uploads/2013/06/011-002-TEST_MARGARINE_35-copie.jpg"
    // soucategorie.produit=[produit,produit2]
    soucategorie.categorie= categorieBois
    await connection.manager.save(soucategorie)
    console.log("saved a new soucategorie with id: "+soucategorie.id)

      /* add sous categorie2 */
    const soucategorie2 = new SousCategorie()
    soucategorie2.nomSouCategorie="Crèmes Fraîches & Chantilly"
    soucategorie2.img="https://www.mescoursesalaloupe.fr/wp-content/uploads/2018/09/cre%CC%80mes-pour-chantilly.png"
    soucategorie2.categorie=categorieBois
    // soucategorie.produit=[produit,produit2]
    await connection.manager.save(soucategorie2)
    console.log("saved a new soucategorie with id: "+soucategorie2.id)

      /* add sous categorie3 */
    const soucategorie3 = new SousCategorie()
    soucategorie3.nomSouCategorie="Fromages"
    soucategorie3.img="https://www.fromagerie-lincet.net/wp-content/uploads/2016/12/EDN0170-e1575535688791.jpg"
    soucategorie3.categorie=categorieBois
    // soucategorie.produit=[produit,produit2]
    await connection.manager.save(soucategorie3)
    console.log("saved a new soucategorie with id: "+soucategorie3.id)

      /* add sous categorie4 */
      const soucategorie4 = new SousCategorie()
      soucategorie4.nomSouCategorie="Oeufs"
      soucategorie4.img="https://static.lexpress.fr/medias_12182/w_1024,h_768,c_crop,x_874,y_143/w_605,h_350,c_fill,g_north/v1575917123/des-oeufs-illustration_6237336.jpg"
      soucategorie4.categorie=categorieBois
      // soucategorie.produit=[produit,produit2]
      await connection.manager.save(soucategorie4)
      console.log("saved a new soucategorie with id: "+soucategorie4.id)
    
    }).catch(error => console.log(error))




