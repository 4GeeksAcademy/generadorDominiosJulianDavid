  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let doc = [".com", ".es", ".co", "br", "ar"];
  
 let generadorDominios = () => {    
    for (let iPronoun = 0; iPronoun < pronoun.length; iPronoun ++){
        let newPronoun = [pronoun[iPronoun]];

        for (let iAdj = 0; iAdj < adj.length; iAdj ++){
            let newAjd = [adj[iAdj]];

            for (let iNoun = 0; iNoun < noun.length; iNoun ++){
                let newNoun = [noun[iNoun]];

                for (let iDoc = 0; iDoc < doc.length; iDoc ++){
                    let newDoc =[doc[iDoc]];

                    console.log(newPronoun + newAjd +newNoun + newDoc)
                };
            };
        };
    };
  
};

generadorDominios();