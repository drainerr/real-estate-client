const initStateOfProperty = {
	propertyType: '',
	transactionType: '',
	address: '',
	price: undefined,
	area: undefined,
	location: '',
	description: '',
	details: {
		parking: undefined,
		bathroom: undefined,
		room: undefined,
		garage: undefined,
	},
	publisher: {
		name: {
			first: '',
			last: '',
		},
		number: '',
	},
	features: {
		naturalGas: false,
		IronDoor: false,
		hotWater: false,
		ac: false,
		telephone: false,
		washingMachine: false,
		basement: false,
		garage: false,
		furniture: false,
		alarm: false,
		tv: false,
		cableTv: false,
		internet: false,
		closet: false,
		balcony: false,
		fridge: false,
		centralHeating: false,
	},
	images: [],
};

export default initStateOfProperty;