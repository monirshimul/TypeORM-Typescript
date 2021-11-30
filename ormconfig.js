const { User } = require("./src/entity/user.entity");

module.exports = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "test",
    entities: [User],
    synchronize: true
}