import { Comanda } from "../shared/model/comanda.model";

export const COMANDAS : Array<Comanda> = [
		{
			"id": 1,
			"cliente": {
				"id": 1,
				"nome": "Erick Luz"
            },
            "data": "01/04/2019",
			"mesa": 1,
			"garcom": {
				"id": 1,
				"nome": "Consagrado"
			},
			"itensComanda": [
				{
					"id": 1,
					"produto": {
						"id": 1,
						"nome": "Brahama",
						"descricao": "Cerveja",
						"quantidadeEstoque": 190,
						"valor": 5
					},
					"quantidade": 14
				},
				{
					"id": 2,
					"produto": {
						"id": 1,
						"nome": "Sub zero",
						"descricao": "Cerveja",
						"quantidadeEstoque": 250,
						"valor": 4
					},
					"quantidade": 3
				}
			]
		},
		{
			"id": 2,
			"cliente": {
				"id": 2,
				"nome": "Luizao"
            },
            "data": "01/04/2019",
			"mesa": 2,
			"garcom": {
				"id": 1,
				"nome": "Consagrado"
			},
			"itensComanda": [
				{
					"id": 1,
					"produto": {
						"id": 1,
						"nome": "Brahama",
						"descricao": "Cerveja",
						"quantidadeEstoque": 190,
						"valor": 5
					},
					"quantidade": 14
				},
				{
					"id": 2,
					"produto": {
						"id": 1,
						"nome": "Sub zero",
						"descricao": "Cerveja",
						"quantidadeEstoque": 250,
						"valor": 4
					},
					"quantidade": 3
				}
			]
		},
		{
			"id": 3,
			"cliente": {
				"id": 3,
				"nome": "Antonio"
            },
            "data": "01/04/2019",
			"mesa": 3,
			"garcom": {
				"id": 1,
				"nome": "Consagrado"
			},
			"itensComanda": [
				{
					"id": 4,
					"produto": {
						"id": 1,
						"nome": "Coca-cola",
						"descricao": "Refrigerante",
						"quantidadeEstoque": 142,
						"valor": 2
					},
					"quantidade": 14
				},
				{
					"id": 2,
					"produto": {
						"id": 22,
						"nome": "Batata-frita",
						"descricao": "Porcao",
						"quantidadeEstoque": 0,
						"valor": 4
					},
					"quantidade": 3
				}
			]
		}
	]


export const COMANDA : Comanda = {
	"id": 1,
	"cliente": {
		"id": 1,
		"nome": "Erick Luz"
	},
	"data": "01/04/2019",
	"mesa": 1,
	"garcom": {
		"id": 1,
		"nome": "Consagrado"
	},
	"itensComanda": [
		{
			"id": 1,
			"produto": {
				"id": 1,
				"nome": "Brahama",
				"descricao": "Cerveja",
				"quantidadeEstoque": 190,
				"valor": 5
			},
			"quantidade": 14
		},
		{
			"id": 2,
			"produto": {
				"id": 1,
				"nome": "Sub zero",
				"descricao": "Cerveja",
				"quantidadeEstoque": 250,
				"valor": 4
			},
			"quantidade": 3
		}
	]
}