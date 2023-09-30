require("dotenv").config();

const { Course } = require('../../models/Course');
const nodemailer = require ('nodemailer');
const getOneCourse = require("../courses/getOneCourse");
const genOrderTemplate = require("../../utils/mailTemplates/genOrderTemplate");

const {API_PASSWORD} = process.env;


const mailerGenOrder = async (order, user) => {
    const cleanInfo = (courses) => {
        const newArray = [];
        courses.forEach((e) => {
            if (!!newArray.find((obj) => obj?.id == e)) {
                const index = newArray.findIndex((obj) => obj?.id == e);
                if (index !== -1) {
                    let aux = newArray[index];
                    aux = { ...aux, cant: aux.cant + 1 };
                    newArray[index] = aux;
                }
            } else {
                newArray.push({ id: e, cant: 1 });
            }
        });

        return newArray;
    }

    const { cliente_id, monto, courses } = order;

    if (!user) {
        throw new Error(`El cliente con el ID ${cliente_id} no fue encontrado.`);
    } else {
        const array = cleanInfo(courses);

        const coursesNames = await Promise.all(
            array.map(async (element) => {
              const courseDB = await getOneCourse(element.id);

              return ({ nombre: courseDB.nombre, cant: element.cant, precio: courseDB.precio });
            })
        );

        const htmlContent = genOrderTemplate(coursesNames, monto);

        const config = {
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: 'veganworld36@gmail.com',
                pass: API_PASSWORD,
            }
        };
        
        const message = {
            from: 'veganworld36@gmail.com',
            to: user.email,
            subject: `Thank you for your order. ${user.nombre}.`,
            html: htmlContent,
        }
        
        const transporter = nodemailer.createTransport(config);

        const info = await transporter.sendMail(message);

        return info;
    }
};


module.exports = mailerGenOrder;