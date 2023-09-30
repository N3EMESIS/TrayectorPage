const { Course } = require("../../db");

const createCourse = async (nombre, tipo, descripcion, precio, imagen) => {
    if(nombre && tipo && descripcion && precio && imagen) {
        const course = await Course.create({ nombre, tipo, descripcion, precio, imagen });

        return course;
    } else {
        throw Error ('Faltan datos, porfavor complete los datos marcados con *.')
    }
};

module.exports = createCourse;