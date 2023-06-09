// Actions
async function requestEndTurn() {
    try {
        const response = await fetch(`/api/plays/endturn`, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          method: "PATCH"
      });
      return {successful: response.status == 200};
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: err};
    }
}

async function requestDecks() {
    try {
        const response = await fetch(`/api/decks/auth`);
        let result = await response.json();
        return { successful: response.status == 200,
                 unauthenticated: response.status == 401,
                 decks: result};
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: err};
    }
}

async function requestPlayCard(deckId) {
    try {
        const response = await fetch(`/api/decks/play`, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          method: "PATCH",
          body: JSON.stringify({
            deckId: deckId
        })
      });
      let result = await response.json();
      return {successful: response.status == 200, msg: result.msg};
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: err};
    }
}
