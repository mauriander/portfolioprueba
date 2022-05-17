import { Skill } from "./skill.model";
import { Proyecto } from "./proyecto.model";
import { Experiencia } from "./experiencia.model";
export interface Persona{
id?:number,
nombre: string,
skills:Skill[],
proyectos: Proyecto[],
experiences: Experiencia[],

}