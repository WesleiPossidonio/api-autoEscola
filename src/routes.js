import { Router } from 'express'
import UserController from './app/controlles/UserController'
import SessionController from './app/controlles/SessionController'

import authMiddlewares from './app/middlewares/auth'
import CreateStudentForTestController from './app/controlles/CreateStudentForTestController'




const routes = new Router()

routes.post('/users', UserController.store)
routes.patch('/update-password', UserController.update)
routes.post('/sessions', SessionController.store)

routes.use(authMiddlewares)

routes.get('/students', CreateStudentForTestController.index)
routes.post('/createStudent', CreateStudentForTestController.store)
routes.put('/updateStudent/:id', CreateStudentForTestController.update)

export default routes
