const tableau = ['1','2','3','4','5','6','7','8','9','10']

tableau.map(x => console.log(x %2 === 0 ? x + ` pair` : x + ` impaire`))