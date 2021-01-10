import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Categorie } from "../entity/Categorie";

export class CategorieController {

    private categorieRepository = getRepository(Categorie);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.categorieRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.categorieRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.categorieRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let categorieToRemove = await this.categorieRepository.findOne(request.params.id);
        await this.categorieRepository.remove(categorieToRemove);
    }

}