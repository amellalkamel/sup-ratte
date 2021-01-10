import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { SousCategorie } from "../entity/SousCategorie";

export class SousCategorieController {

    private souscategorieRepository = getRepository(SousCategorie);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.souscategorieRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.souscategorieRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.souscategorieRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let souscategorieToRemove = await this.souscategorieRepository.findOne(request.params.id);
        await this.souscategorieRepository.remove(souscategorieToRemove);
    }

}