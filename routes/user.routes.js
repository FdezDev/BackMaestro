import { Router } from 'express';
import bodyParser from 'body-parser';
import { userController } from '../controllers/user.controller.js';

const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

/**
 * @openapi
 * '/api/user/create':
 *  post:
 *     tags:
 *     - User
 *     summary: Crea usuario
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - password
 *              - cel
 *              - estado
 *              - ciudad
 *              - colonia
 *              - edificio
 *              - direccion
 *            properties:
 *              name:
 *                type: string
 *                default: prueba
 *              email:
 *                type: string
 *                default: prueba@gmail.com
 *              cel:
 *                type: string
 *                default: 9925543456
 *              password:
 *                type: string
 *                default: prueba141189@
 *              cp:
 *                type: string
 *                default: 29150
 *              estado:
 *                type: string
 *                default: chiapas
 *              ciudad:
 *                type: string
 *                default: suchiapa
 *              colonia:
 *                type: string
 *                default: la mision
 *              edificio:
 *                type: string
 *                default: color negro dos platas
 *              direccion:
 *                type: string
 *                default: frente la clinica
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

router.post('/create', (req, res) => userController.user_create(req, res));

/**
 * @openapi
 * '/api/user/login':
 *  post:
 *     tags:
 *     - User
 *     summary: login
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: prueba@gmail.com
 *              password:
 *                type: string
 *                default: prueba141189@
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

router.post('/login', (req, res) => userController.user_login(req, res));

/**
 * @openapi
 * '/api/user/update_Password':
 *  put:
 *     tags:
 *     - User
 *     summary: update password
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: arisel583@gmail.com
 *              password:
 *                type: string
 *                default: yeremi224
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

 router.put('/update_Password', (req, res) => userController.user_update(req, res));

/**
 * @openapi
 * '/api/user/config':
 *  post:
 *     tags:
 *     - User
 *     summary: confirmation message
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - valor
 *            properties:
 *              valor:
 *                type: string
 *                default: false
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
 router.post('/config', (req, res) => userController.confirmation(req, res));
 
 router.get('/view', (req, res) => userController.user_view(req, res));

export default router;

