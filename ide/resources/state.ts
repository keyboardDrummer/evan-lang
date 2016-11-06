import {observable} from "mobx";

const resourceNestedLetSameVariable = require("../../data/nestedLetSameVariable.json");
const resourceNestedLet = require("../../data/nestedLet.json");
const resourceForgetLet = require("../../data/forgetLet.json");
const resourceBadLetReference = require("../../data/badLetReference.json");
const resourceLet = require("../../data/let.json");
const resourceFib = require("../../data/fib.json");
const resourceSimple = require("../../data/simple.json");
const resourceSimpleFunc = require("../../data/simple-func.json");
const metaModel = require("../../meta/meta-model.json");

export class ResourcesState {

	@observable private _resourcesMap: { [path: string]: any } = {};

	addResource(path: string, jsonData: any) {
		this._resourcesMap[path] = jsonData;
	}

	resourceByPath(path: string) {
		return this._resourcesMap[path];
	}

	resourcesAsMap() {
		return this._resourcesMap;
	}

}

export const resourcesState = new ResourcesState();

resourcesState.addResource("nestedLetSameVariable", resourceNestedLetSameVariable);
resourcesState.addResource("nestedLet", resourceNestedLet);
resourcesState.addResource("forgetLet", resourceForgetLet);
resourcesState.addResource("badLetReference", resourceBadLetReference);
resourcesState.addResource("let", resourceLet);
resourcesState.addResource("simple", resourceSimple);
resourcesState.addResource("simple-func", resourceSimpleFunc);
resourcesState.addResource("fib", resourceFib);
resourcesState.addResource("meta-model", metaModel);

