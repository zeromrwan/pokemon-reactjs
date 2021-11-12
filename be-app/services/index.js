const service = {};
const repository = require("../config/repository/index");
const utils = require("../utils/index");

service.create = async (data) => {
  let checked = await repository.repoTdOwned.get({ pokemonId: data["id"] });
  if (checked === null) {
    await repository.repoTdOwned.create({
      pokemonId: data["id"],
      nickname: data["nickname"],
      urlImage: data["url"],
      fibSeq: null,
      totalOwned: 1,
      pokemonName: data['pokemonName']
    });
  } else {
    checked["totalOwned"] += 1;
    await repository.repoTdOwned.update(
      {
        totalOwned: checked["totalOwned"],
      },
      { pokemonId: data["id"] }
    );
  }
  return;
};
service.getAll = async () => {
  let result = await repository.repoTdOwned.getAll();
  return result;
};
service.get = async (id) => {
  let result = await repository.repoTdOwned.get({ pokemonId: id });
  return result;
};
service.rename = async (id) => {
  let data = await repository.repoTdOwned.get({ pokemonId: id });
  let fib
  if(data['fibSeq'] === null){
    fib=0  
  }else{
    fib = data["fibSeq"] += 1;
  }
  
  let fibSeq = await utils.getFibonaciSeq(fib);
  let nick = data["nickname"].split("-");
  let newNickName = nick[0] + "-" + fibSeq;
  await repository.repoTdOwned.update(
    { nickname: newNickName, fibSeq: fib },
    { pokemonId: id }
  );
  return newNickName;
};
service.release = async (id) => {
  let data = await repository.repoTdOwned.get({ pokemonId: id });
  let isPrime = await utils.checkPrime(data["totalOwned"]);
  if (isPrime === true) {
    let totalOwnedNew = data["totalOwned"] - 1;
    await repository.repoTdOwned.update(
      { totalOwned: totalOwnedNew },
      { pokemonId: id }
    );
  }
  return isPrime;
};
module.exports = service;
