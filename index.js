const express = require("express")
const sequelize = require('./db')

// db models
const user_account_model = require('./models/user_acount_model')
const federal_district_model = require('./models/federal_district_model')
const region_model = require('./models/region_model')
const university_in_region_model = require('./models/university_in_region_model')
const university_model = require('./models/university_model')
const user_in_university_model = require('./models/user_in_university_model')
const user_model = require('./models/user_model')

// routers
const user_account_router = require('./routes/user_account_routes')
const federal_district_router = require('./routes/federal_district_routes')
const university_router = require('./routes/universtiy_routes')
const user_router = require('./routes/user_routes')
const user_in_university = require('./routes/user_in_university_routes')
const region = require("./routes/region_routes")
const university_in_region = require("./routes/university_in_region_routes")

const app = express()
const PORT = "5000"

app.use(express.json())

app.use('/user-account', user_account_router, (req, res) => {})
app.use('/federal-district', federal_district_router, (req, res) => {})
app.use('/user', user_router, (req, res) => {})
app.use('/university', university_router, (req, res) => {})
app.use('/user-in-university', user_in_university, (req, res) => {})
app.use('/region', region, (req, res) => {})
app.use('/university-in-region', university_in_region, (req, res) => {})

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
