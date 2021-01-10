import {UserController} from "./controller/UserController";
import { CategorieController } from "./controller/CategorieController";
import { SousCategorieController } from "./controller/SousCategorieController";
import { ProduitController } from "./controller/ProduitController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}];

export const Routes_cat = [{
    method: "get",
    route: "/categories",
    controller: CategorieController,
    action: "all"
}, {
    method: "get",
    route: "/categories/:id",
    controller: CategorieController,
    action: "one"
}, {
    method: "post",
    route: "/categories",
    controller: CategorieController,
    action: "save"
}, {
    method: "delete",
    route: "/categories/:id",
    controller: CategorieController,
    action: "remove"
}];

export const Routes_sous_cat = [{
    method: "get",
    route: "/sous_categories",
    controller: SousCategorieController,
    action: "all"
}, {
    method: "get",
    route: "/sous_categories/:id",
    controller: SousCategorieController,
    action: "one"
}, {
    method: "post",
    route: "/sous_categories",
    controller: SousCategorieController,
    action: "save"
}, {
    method: "delete",
    route: "/sous_categories/:id",
    controller: SousCategorieController,
    action: "remove"
}];

export const Routes_produit = [{
    method: "get",
    route: "/produits",
    controller: ProduitController,
    action: "all"
}, {
    method: "get",
    route: "/produits/:id",
    controller: ProduitController,
    action: "one"
}, {
    method: "post",
    route: "/produits",
    controller: ProduitController,
    action: "save"
}, {
    method: "delete",
    route: "/produits/:id",
    controller: ProduitController,
    action: "remove"
}];