import {observer} from "mobx-react";
import * as React from "react";

import {makePropertyAccessor} from "../utils/accessor";
import {BaseEditWidget} from "../base-edit-widget";
import {dispatch} from "../dispatcher";
import {IFunctionDefinition} from "../../../core/semantics-types_gen";
import {mapMap} from "../../../core/util";


@observer
export class FunctionDefinition extends BaseEditWidget<IFunctionDefinition> {

	renderContents(functionDefinition: IFunctionDefinition) {
		return (
			<div>
				<span><b>define</b> </span><span><em>{functionDefinition.name}</em></span><span>(</span>
					{mapMap(functionDefinition.parameters, (paramName, type) => (
						<div className="indent" key={paramName}>
							<span>{paramName}</span><span>: </span><span>{type}</span>
						</div>
					))}
				<span>)</span>{functionDefinition.returnType ? <span>: {functionDefinition.returnType}</span> : null}
				<span> {"{"}</span>
				<div className="indent">
					{dispatch(makePropertyAccessor(functionDefinition, "body"))}
				</div>
				<span>{"}"}</span>
			</div>
		);
	}

}
