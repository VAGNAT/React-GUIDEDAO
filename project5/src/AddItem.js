import React from "react";

function AddItem(props) {
	return (<><form onSubmit={props.onFormSubmit}>
		<div>
			<input
				type="text"
				placeholder="Название товара"
				className="ui-textfield"
				value={props.name}
				onChange={props.onChangeName}
			/>
		</div>
		<div>
			<input
				type="text"
				placeholder="Описание товара"
				className="ui-textfield"
				value={props.desc}
				onChange={props.onChangeDesc}
			/>
		</div>
		<div className="form-footer">
			<div className="validation">{props.fieldsEmpty}</div>
			<input type="submit" className="ui-button" value="Добавить" />
		</div>
	</form></>);
}
export default AddItem;			