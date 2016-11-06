import {observer} from "mobx-react";
import * as React from "react";

import {makePropertyAccessor} from "../utils/accessor";
import {BaseEditWidget} from "../base-edit-widget";
import {dispatch} from "../dispatcher";
import {ILet} from "../../../core/semantics-types_gen";

@observer
export class Let extends BaseEditWidget<ILet> {

	renderContents(letExpression: ILet) {
		return (
			<div>
				<span><b>let</b>: </span><div className="indent">
					{dispatch(makePropertyAccessor(letExpression, "name"))}</div>
				<span><b>=</b></span><div className="indent">
					{dispatch(makePropertyAccessor(letExpression, "body"))}</div>
				<span><b>in</b>: </span><div className="indent">
					{dispatch(makePropertyAccessor(letExpression, "value"))}</div>
			</div>
		);
	}

}
