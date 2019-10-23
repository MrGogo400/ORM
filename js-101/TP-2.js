let user = {
    nom: 'Patrick Balkany',
    description: 'Jean-Marie Bigard',
    budget: 6
}

function drunk(user) {          
    if (user.budget == null){
        user.description = 'Tu as oublié ton porte feuille'
    } else if (user.budget < 0 || user.budget < 5) {
        user.description = 'Il fallait travailler cet été'
    } else if (user.budget === 5) {
        user.description = 'Tu as le droit à une bière'
    } else if (user.budget > 5) {
        user.description = 'Tu peux payer ta tournée'
    }
}

drunk(user)

console.log('Bravo,' + ' ' + user.nom + ' ' + user.description + ' ' + 'Voici le rappel de ton budget =' + ' ' + user.budget)