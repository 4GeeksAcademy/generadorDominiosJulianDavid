  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let doc = [".com", ".es", ".co", "br", "ar"];
  
 let generadorDominios = () => {    
    for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex ++){
        let newPronoun = [pronoun[pronounIndex]];

        for (let adjIndex = 0; adjIndex < adj.length; adjIndex ++){
            let newAjd = [adj[adjIndex]];

            for (let nounIndex = 0; nounIndex < noun.length; nounIndex ++){
                let newNoun = [noun[nounIndex]];

                for (let docIndex = 0; docIndex < doc.length; docIndex ++){
                    let newDoc =[doc[docIndex]];

                    console.log(newPronoun + newAjd +newNoun + newDoc)
                };
            };
        };
    };
  
};

generadorDominios();