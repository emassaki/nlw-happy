const Database = require("./db");
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-23.319793",
    lng: "-51.1801292",
    name: "Lar dos meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "43 3524 5154",
    images: [
      "https://images.unsplash.com/photo-1582167371270-68a4c033e732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1582167410766-a90eea4787ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "1"
  })

  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages"); //seleciona todas as linhas e colunas da tabela orphanages
  console.log(selectedOrphanages);


  //consultar somente um orfatato pelo ID
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
  // console.log(orphanage)


  //deletar dado da tabela (para deletar tudo é só tirar o where). Ao deletar, o ID ainda se mantém na mesma ordem
  //await db.run("DELETE FROM orphanages")
  
});
