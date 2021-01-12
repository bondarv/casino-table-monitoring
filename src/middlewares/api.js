import {START, SUCCESS} from '../constants';

export default store => next => action => {
    const {callAPI, type, ...rest} = action;
    if (!callAPI) return next(action);

    next({
        ...rest, type: type + START
    });

    // using fetch, load tables from the server
    // fetch(callAPI)
    //     .then(res => res.json())
    //     .then(response => next({...rest, type: type + SUCCESS, response}))

    // if don't have an api, just simulate it by adding random values
    const tablesType = [`poker`, `roulette`, `black-jack`];
    const randomTables = [];

    for (let i = 0; i < Math.floor(Math.random() * 9) + 1; i++) {
        let randomType = tablesType[Math.floor(Math.random() * tablesType.length)];

        let max = 0;

        if (randomType === `poker`) {
            max = 6;
        }
        if (randomType === `roulette`) {
            max = 4;
        }
        if (randomType === `black-jack`) {
            max = 2;
        }

        randomTables.push({
            "id": i.toString(),
            "type": randomType,
            "name": Math.random().toString(36).substring(7),
            "warnings": Math.random() >= 0.5,
            "players": Math.floor(Math.random() * max) + 1,
            "maxPlayers": Math.floor(Math.random() * max) + 1
        });
    }

    // setTimeout to simulate api loading
    setTimeout(() => {
        next({...rest, type: type + SUCCESS, response: randomTables});
    }, 500);
};