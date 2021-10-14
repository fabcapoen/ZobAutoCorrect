var textNode;
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
 
// Expressions à remplacer par 'Zob'
const rExp1 = new RegExp('Éric Zemmour|'+ 
	'ÉricZemmour|'+
	'EricZemmour|'+
	'Eric Zemmour|'+
	'Zemmour|'+
	'Éric Justin Léon Zemmour|'+
	'Eric Justin Léon Zemmour|'+
	'M[\.r] Zemmour', 'gi' // Recherche 'g'lobal et 'i'nsensible à la casse
);
 
// Appliquer les changements dans la page
while(textNode=walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue.replace(rExp1, 'Zob');
}
 
// Appliquer les changement dans la barre de titre
document.title = document.title.replace(rExp1, 'Zob');



