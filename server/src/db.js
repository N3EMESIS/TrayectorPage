require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const { Sequelize } = require("sequelize");

const AdminModel = require("./models/Admin");
const BillModel = require("./models/Bill");
const ClientModel = require("./models/Client");
const CourseModel = require("./models/Course");
const OrderModel = require("./models/Order");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/trayector`,
  {
    logging: false,
    native: false,
  }
);

AdminModel(sequelize);
BillModel(sequelize);
ClientModel(sequelize);
CourseModel(sequelize);
OrderModel(sequelize);

const { Client, Course, Order, Bill } =
  sequelize.models;

Client.hasMany(Order);
Order.belongsTo(Client);

Course.belongsToMany(Order, {
  through: "course_order",
  foreignKey: "course_id",
  as: "orders",
});
Order.belongsToMany(Course, {
  through: "course_order",
  foreignKey: "order_id",
  as: "courses",
});

Order.belongsTo(Bill);
Bill.hasOne(Order);

Client.hasMany(Bill);
Bill.belongsTo(Client);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
