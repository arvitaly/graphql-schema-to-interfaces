"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `interface IQuery {
    viewer: IViewer;
}
interface IViewer {
    model1: IModel1;
}
interface IModel1 {
    field1: string;
}`;
