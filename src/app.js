

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let doc = [".com", ".es", ".co", ".br", ".ar"];

window.onload = function () {
  let generadorDominios = () => {
    let dominios = [];
    for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {

      for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {

        for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {

          for (let docIndex = 0; docIndex < doc.length; docIndex++) {

            let dominio = [pronoun[pronounIndex]] + [adj[adjIndex]] + [noun[nounIndex]] + [doc[docIndex]];
            dominios.push(dominio)
            console.log(dominios)
           
          };
        };
      };
    };
      return dominios 
  };
  generadorDominios();
};


