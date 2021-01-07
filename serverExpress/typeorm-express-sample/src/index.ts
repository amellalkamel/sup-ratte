import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {User} from "./entity/User";
import {createConnection,getConnection} from "typeorm";
import { Produit } from "./entity/Produit" ;
import { Categorie } from "./entity/Categorie";
import { SousCategorie } from "./entity/SousCategorie";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

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
    .where("categorie.nomCategorie = :nomCategorie", { nomCategorie: "Entretien & Nettoyage" }) .getOne();

    console.log("Loding categories", categorieBois)

      /* add sous categorie1 */
    const soucategorie = new SousCategorie()
    soucategorie.nomSouCategorie="Accessoires de Ménage"
    soucategorie.img="https://lh3.googleusercontent.com/proxy/FyqGGDM-0JxzoyoLGKhuwnpjJcGsxDSGnFm1VGz60P0czX7O0Yi6Y-GIGqZtAQ7-8FlQJkMjLxsOI0ksEXR5geek_NFpS_yLSTbV7YoRWk2LJ2KA-VqpAq-P73-UJeT8y47un0M2rLjZ72gRQtAUVPLpKQ"
    // soucategorie.produit=[produit,produit2]
    soucategorie.categorie= categorieBois
    await connection.manager.save(soucategorie)
    console.log("saved a new soucategorie with id: "+soucategorie.id)

      /* add sous categorie2 */
    const soucategorie2 = new SousCategorie()
    soucategorie2.nomSouCategorie="Désodorisants & Insecticides"
    soucategorie2.img="https://lh3.googleusercontent.com/proxy/FyDjOOaf5shAJRW9Auz5gv7VnuOQnTgS1_DjYrwjXeSK76mu7PYaifMCc2sQ7HoOdCcqJgATk9SDS2My--KMbXh4uZFGRanEs8oICG3S0Qzipg"
    soucategorie2.categorie=categorieBois
    // soucategorie.produit=[produit,produit2]
    await connection.manager.save(soucategorie2)
    console.log("saved a new soucategorie with id: "+soucategorie2.id)

      /* add sous categorie3 */
    const soucategorie3 = new SousCategorie()
    soucategorie3.nomSouCategorie="Lessive"
    soucategorie3.img="https://th.bing.com/th/id/OIP.XrP_9Lg6XWG4FB3R9Y--FQHaHa?pid=Api&rs=1"
    soucategorie3.categorie=categorieBois
    // soucategorie.produit=[produit,produit2]
    await connection.manager.save(soucategorie3)
    console.log("saved a new soucategorie with id: "+soucategorie3.id)

      /* add sous categorie4 */
      const soucategorie4 = new SousCategorie()
      soucategorie4.nomSouCategorie="Nettoyants Lave-vaisselles"
      soucategorie4.img="https://img.grouponcdn.com/deal/nyhYnjhaPXtJr4NHjBvbWLT6Q2e/ny-963x577/v1/c700x420.jpg"
      soucategorie4.categorie=categorieBois
      // soucategorie.produit=[produit,produit2]
      await connection.manager.save(soucategorie4)
      console.log("saved a new soucategorie with id: "+soucategorie4.id)

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
