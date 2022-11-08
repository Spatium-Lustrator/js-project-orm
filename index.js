const express = require("express")
const sequelize = require('./db')

// db models
const university_model = require('./models/university_model')
const admin_model = require('./models/admin_model')
const certificate_id_model = require('./models/certificate_id_model')
const user_model = require('./models/user_model')
const user_info_model = require('./models/user_info_model')

// routers
const university_router = require('./routes/universtiy_routes')

const app = express()
const PORT = "5000"

app.use(express.json())

app.use('/save-university', university_router)

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('[SUCCESS] CONNECTION SET');
        app.listen(PORT, () => console.log("[SUCCESS] SERVER WORKS"))
    } catch (error) {
            console.log("[FAIL] ERROR: " + error);
    }
}


start();