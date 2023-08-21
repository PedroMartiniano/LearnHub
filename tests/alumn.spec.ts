import {describe, it} from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('should test all alumn routes', async () => {
    it('should create a new alumn with his user', async () => {
        await request(app)
            .get('/alumn/create')
            .send({first_name: "Vitest", last_name: "alumn", cpf: "692130", email: "test@vitest", password: "123"})
            .expect(201)
    })
})