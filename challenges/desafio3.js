db.produtos.find(
  { nome: "Big Mac" },
  { _id: 0, nome: 1, vendidos: 1 },
);