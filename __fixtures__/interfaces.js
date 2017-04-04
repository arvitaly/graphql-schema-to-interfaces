"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `export interface IQuery {
    viewer(): IViewer;
}
export interface IViewer {
    model1(): IModel1;
    model1s(params?: IViewermodel1sParams): IModel1Connection;
}
export interface IViewermodel1sParams {
    after: string;
    first: number;
    before: string;
    last: number;
}
export interface IModel1Connection {
    pageInfo(): IPageInfo;
    edges(): IModel1Edge[];
}
export interface IModel1Edge {
    node(): IModel1;
    cursor: string;
}
export interface IPageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
    endCursor: string;
}
export interface IModel1 {
    field1(params?: IModel1field1Params): string;
}
export interface IModel1field1Params {
    arg1: string;
}`;
