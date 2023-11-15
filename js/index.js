const personnes = [
	{
		type: 'user',
		nom: 'Max Musterman',
		age: 25,
		villes: ['Marseilles', 'Lyon', 'Paris'],
	},
	{
		type: 'admin',
		nom: 'John Wick',
		age: 25,
		villes: ['Paris'],
	},
	{
		type: 'user',
		nom: 'Kate Muller',
		age: 23,
		villes: ['Nantes', 'Lyon', 'Lille', 'Nice'],
	},
	{
		type: 'admin',
		nom: 'Bruce Willis',
		age: 64,
		villes: ['Paris', 'Nantes'],
	},
	{
		type: 'user',
		nom: 'Jack Wilson',
		age: 34,
		villes: ['Marseilles', 'Lyon', 'Monpellier'],
	},
	{
		type: 'admin',
		nom: 'Carol Smith',
		age: 23,
		villes: ['Marseilles', 'Nice', 'Monpellier'],
	},
];

//  1) une fonction qui retourne la liste des personnes selon le type passe en paramettre

function getByType(type) {
	return personnes.filter((personneType) => {
		return personneType.type == type;
	});
}
const getPersonListByType = getByType('user');
// console.log(getPersonListByType);

/*
 2) function qui renvoie les personnes ayant la ville passer en paramettre
*/

function getByVille(ville) {
	return personnes.filter((personne) => {
		return personne.villes.includes(ville);
	});
}
let userprompt = prompt('Entrez une ville', 'Paris')
const getListPerson = getByVille(userprompt);

console.log(getListPerson);

// console.log(getListPerson);

// console.log(getNamePerson);

/*
  3) une liste de personnes n'ayant pas la ville passer en paramettre
*/
function getOtherVilleThan(ville) {
	return personnes
		.filter((personne) => {
			return !personne.villes.includes(ville);
		})
		.map((nom) => {
			return {
				Nom: nom.nom,
			};
		});
}

const getNameOtherVilleTham = getOtherVilleThan('Nice');

// console.log(getNameOtherVilleTham);

// const nomPersonnePasCetteVille = personnePasCetteVille.map(nom=>{
//   return nom.nom;
// })
// console.log(nomPersonnePasCetteVille);

/*
 Q4: Une fonction qui retourne un tableau d'objets : chaque objet contient le nom d'une personne ainsi que
*/

const nomEtNombreDeVille = personnes.map((personne) => {
	return {
		nom: personne.nom,
		nombreVille: personne.villes.length,
	};
});

// console.log(nomEtNombreDeVille);

/*
Q5: Une fonction qui retourne les personnes dont le nombre de villes d'intervention correspond au paramèt
re
*/

const personneMoinDeTroisVilles = personnes
	.filter((personne) => {
		return personne.villes.length >= 3;
	})
	.map((nomPersone) => {
		return {
			nom: nomPersone.nom,
		};
	});
//  console.log(personneMoinDeTroisVilles);

/*
  Q6: Une fonction qui retourne un tableau d'objets : chaque objet contient le nom d'une personne ainsi que l
*/

const nomEtNombreDeCaractereDeVille = personnes.map((personne) => {
	return {
		nom: personne.nom,
		total: personne.villes.reduce((accumulateur, element) => {
			return accumulateur + element.length;
		}, 0),
	};
});

// console.log(nomEtNombreDeCaractereDeVille);

/*
 Q7: Une fonction qui retourne le nombre de personnes qui interviennent dans la ville passée
 en parametre (ici c'est 3 pour Marseille par exemple).
*/

function nombrepersonneIntervientDansCetteVille(ville) {
	return personnes.reduce((accumulateur, personne) => {
		if (personne.villes.includes(ville)) {
			return accumulateur + 1;
		} else {
			return accumulateur;
		}
	}, 0);
}

const nombreDepersonnes = nombrepersonneIntervientDansCetteVille('Marseilles');
// console.log(nombreDepersonnes);

/* Q8: Une fonction qui permet de retourner le nombre max de villes d'intervention de toutes
les personnes (ici c'est 4).
*/

function nombreMaxVille() {
	return personnes.reduce((accumulateur, personne) => {
		return Math.max(accumulateur, personne.villes.length);
	}, 0);
}

const nbVilles = nombreMaxVille();
// console.log(nbVilles);

// Q9: une fonction qui permet de retourner un tableau de toutes les villes (sans doublons).

function toutLesVilles() {
	const villes = personnes.flatMap((personne) => {
		return personne.villes;
	});
	return Array.from(new Set(villes));
}

const difvilles = toutLesVilles();

// console.log(difvilles);

// Q10: une fonction qui retourne la moyenne d'age (d'employés) de la ville passée en paramètre.
let somme = 0;
function getAvgAge(ville) {
	return personnes
		.filter((persnone) => {
			return persnone.villes.includes(ville);
		})
		.reduce((accumulateur, personne) => {
			return (somme = accumulateur + personne.age);
		}, 0);
}

const sommeAgePersonne = getAvgAge('Paris');
// console.log(somme);
// console.log(sommeAgePersonne);
