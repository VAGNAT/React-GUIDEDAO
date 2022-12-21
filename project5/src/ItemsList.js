import React from "react";

import Item from "./Item.js";

function ItemsList(props) {
	return (<><ul className="ui-list">
		{props.items.map((item) => {
			return (
				<li key={item.id} className="ui-item-list">
					<Item info={item} />
					<button
						className="item-button"
						onClick={() => props.onDelClick(item.id)}
					>
						Удалить
					</button>
				</li>
			);
		})}
	</ul></>);
}

export default ItemsList;