// const mysql2 = require('mysql2');

// const connection = mysql2.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'new_schema',
//     password: 'tarascr777!'
//   });


// module.exports = connection;

const Sequelize = require('sequelize');


function initConnection() {
    const client = new Sequelize('new_schema', 'root', 'tarascr777!', {
      host: 'localhost',
      dialect: 'mysql'
    })
      let models = {};

      

}


module.exports = (()=>{
  let instanse;


  return {
    getInstanse: () => {
      if (!instanse) {
         instanse = 'xxx'
      }
      return instanse;
    }
  }
})();

