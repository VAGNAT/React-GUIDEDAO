import React, { useState } from "react";
import uuid from "react-uuid";

import ItemsList from "./ItemsList.js";
import AddItem from "./AddItem.js";

export default function Shop() {
	const [items, setItems] = useState([]);
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const [fieldsEmpty, setFieldsEmpty] = useState("");
	
	function handleFormSubmit(e) {
		e.preventDefault();
		if (name === "" || desc === "") {
			setFieldsEmpty("Name or description can't be empty!");
			return;
		}

		setItems([...items, { id: uuid(), name, desc }]);
		setName("");
		setDesc("");
		setFieldsEmpty("");
	}

	function handleDelClick(id) {
		setItems(items.filter((item) => item.id !== id));
	}

	function handleChangeDesc(e) {		
		setDesc(e.target.value);
	}

	function handleChangeName(e) {		
		setName(e.target.value);
	}

	return (
		<>
			<AddItem name={name} desc={desc} onChangeName={handleChangeName} onChangeDesc={handleChangeDesc} onFormSubmit={handleFormSubmit} fieldsEmpty={fieldsEmpty}/>
			{items.length === 0 && (
				<div>
					<p className="ui-title">Добавьте первый товар</p>
				</div>
			)}
			<ItemsList items={items} onDelClick={handleDelClick} />
		</>
	);
}