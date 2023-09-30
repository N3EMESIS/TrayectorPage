const mailerContactUs = require('../../controllers/mail/contactUs');
const mailerGenOrder = require('../../controllers/mail/generateOrder');
const mailerRegister = require('../../controllers/mail/register');

const mailerHandler = async (req, res) => {
    const { type } = req.body;

    switch (type) {
        case 'genOrder': {
            const { user, order } = req.body;

            try {
                if (order?.client_id && order?.courses) {
                    const info = await mailerGenOrder(order, user);
                    if (!info) throw new Error('El mail no ha podido enviarse correctamente.');
                    res.status(200).send('Email enviado correctamente.');
                } else {
                    res.status(400).send('Faltan algunos datos.');
                }
            }
            catch (err){
                res.status(500).send(`${err.message}`);
            }
            break;
        }

        case 'register': {
            const { nombre, direccion, email } = req.body;

            try {
                if (nombre && direccion && email) {
                    const info = await mailerRegister({ nombre, direccion, email });
                    
                    if (!info) throw new Error('El email no ha podido enviarse correctamente.');
                    
                    res.status(200).send('Email enviado correctamente.');
                } else {
                    res.status(400).send('Faltan algunos datos.');
                }
            }
            catch (err) {
                res.status(500).send(`${err.message}`);
            }
            break;
        }

        default : {
            const { email, nombre, textContainer} = req.body;

            try {
                if (email && nombre && textContainer) {
                    mailerContactUs(email, nombre, textContainer);
                    res.status(200).send('Email enviado correctamente.');
                } else {
                    res.status(400).send('Faltan algunos datos.');
                }
            }
            catch (err) {
                res.status(500).send(`${err.message}`);
            }
        }
    }
};

module.exports = mailerHandler;