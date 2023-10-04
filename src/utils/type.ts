export interface PokemonDataList {
	name: string;
	url: string;
}

// export interface PokemonProps {
// 	result: PokemonDataList;
// }

export interface PokemonDetail {
	name: string;
	id: number;
	sprites: {
		other: {
			[key: string]: {
				front_default: string;
			};
		};
	};
	species: {
		url: string;
	};
	stats: {
		base_stat: string;
	}[];
	// types: {
	// 	url: string;
	// }[];
}

export interface PokemonDetailLang {
	// result: {
	// 	names: [
	// 		{
	language: {
		name: string;
		url: string;
	};
	// 		}
	// 	];
	// };
}

export interface PoekmonDetailProps {
	detail: PokemonDetail;
	name: string;
}

export interface PokemonDetailData {
	detail: PokemonDetail[];
}

export interface PokemonSingleDetail {
	stats: {
		base_stat: number;
	}[];
	types: {
		type: {
			url: string;
		};
	}[];
	sprites?: {
		other: {
			[key: string]: {
				front_default: string;
			};
		};
	};
	height: number;
	weight: number;
	species: {
		url: string;
	};
}

export interface PokemonData extends PokemonDetailData {
	data: {
		results: PokemonDataList[];
		next: string;
		previous: string;
	};
	lang: string[];
	singleDetail: PokemonSingleDetail;
	status: string;
	status2: string;
	typesArr: string[];
	name: string;
}

// export interface initialState {
// 	detail: PokemonDetail[];
// 	lang: string[];
// 	singleDetail: PokemonSingleDetail;
// 	status: string;
// 	status2: string;
// }

export interface PokemonSingleData {
	sprites: {
		other: {
			[key: string]: {
				front_default: string;
			};
		};
	};
	height: number;
	weight: number;
}
