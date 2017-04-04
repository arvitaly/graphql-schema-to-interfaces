"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `export interface IQuery {
    node(params?: IQuerynodeParams): any;
    viewer(): IViewer;
}
export interface IViewer {
    id: string;
    model1(): IModel1Connection;
}
export interface IModel1Connection {
    edges(): IModel1ConnectionEdge[];
    pageInfo(): IModel1ConnectionPageInfo;
}
export interface IModel1ConnectionPageInfo {
    hasNextPage: boolean;
}
export interface IModel1ConnectionEdge {
    node(): IModel1;
}
export interface IModel1 {
    id: string;
    field1: string;
    model2(): IModel2;
}
export interface IModel2 {
    field2: number;
    id: string;
}
export interface IQuerynodeParams {
    id: string;
}`;
