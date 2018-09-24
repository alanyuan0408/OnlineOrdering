import { BASE_ORDER_ROUTE } from "../constants/route-constants";

const PizzaItems = 
[
	{
		id: 1,
		itemTitle: "Pizza A",
		itemDescription: "Pizza A Description"
	},
	{
		id: 2,
		itemTitle: "Pizza B",
		itemDescription: "Pizza B Description"
	},
	{
		id: 3,
		itemTitle: "Pizza C",
		itemDescription: "Pizza C Description"
	},
	{
		id: 4,
		itemTitle: "Pizza D",
		itemDescription: "Pizza D Description"
	},
	{
		id: 5,
		itemTitle: "Pizza E",
		itemDescription: "Pizza E Description"
	},
	{
		id: 6,
		itemTitle: "Pizza F",
		itemDescription: "Pizza F Description"
	}
];

const DrinkItems =
[
	{
		id: 7,
		itemTitle: "Drink A",
		itemDescription: "Drink A Description"
	},
	{
		id: 8,
		itemTitle: "Drink B",
		itemDescription: "Drink B Description"
	},
	{
		id: 9,
		itemTitle: "Drink C",
		itemDescription: "Drink C Description"
	},
	{
		id: 10,
		itemTitle: "Drink D",
		itemDescription: "Drink D Description"
	}
];

const SideItems =
[
	{
		id: 17,
		itemTitle: "SideItem A",
		itemDescription: "SideItem A Description"
	},
	{
		id: 18,
		itemTitle: "SideItem B",
		itemDescription: "SideItem B Description"
	},
	{
		id: 19,
		itemTitle: "SideItem C",
		itemDescription: "SideItem C Description"
	},
	{
		id: 20,
		itemTitle: "SideItem D",
		itemDescription: "SideItem D Description"
	}
];

export const PizzaInfo = {
	Title: "Pizza Menu",
	Items: PizzaItems,
	Route: BASE_ORDER_ROUTE + "pizza"	
};

export const DrinkInfo = {
	Title: "Drinks Menu",
	Items: DrinkItems,
	Route: BASE_ORDER_ROUTE + "drinks"	
};

export const SideItemInfo = {
	Title: "Sides Menu",
	Items: SideItems,
	Route: BASE_ORDER_ROUTE + "sides"	
};
