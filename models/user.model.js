import { getData } from '../config/connection.config.js';
import { DataTypes } from 'sequelize';
import bcryptjs from 'bcryptjs';

const User = getData.sequelizeClient.define('cat_users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    validat: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese un nombre'
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            arg: true,
            msg: ''
        },
    },
    cel: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese un nombre'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese una contraseña'
            }
        }
    },
    cp: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese codigo postal'
            }
        }
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese un estado'
            }
        }
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese su ciudad'
            }
        }
    },
    colonia: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese nombre colonia'
            }
        }
    },
    edificio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese detalles del edificio'
            }
        }
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese una direccion'
            }
        }
    },

}, {
    tableName: 'cat_users',
    freezeTableName: true,
    hooks: {
        beforeCreate: (user, options) => {
            {
                user.password = user.password && user.password != "" ? bcryptjs.hashSync(user.password, 10) : "";
            }
        }
    }

});

export const getUser = User;

