var winningPlayerCount = function(n, pick) {
    let c =0;
    let map = new Map();
    for ( let i =0; i<pick.length; i++) {
            let [x,y] = pick[i];
            map.set([x,y] , (map.get(x)||0) +1);
    }
};

