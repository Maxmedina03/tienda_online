require("dotenv").config();

const app = require("./app");
const sequelize = require("./config/database");

require("./models/user");

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await sequelize.authenticate();

        console.log("Conexión con MySQL establecida correctamente");

        await sequelize.sync();

        console.log("Modelos sincronizados correctamente");

        app.listen(PORT, () => {
            console.log(
                `Servidor ejecutándose en http://localhost:${PORT}`
            );
        });

    } catch (error) {
        console.error("Error al iniciar el servidor:");
        console.error(error);
    }
}

startServer();