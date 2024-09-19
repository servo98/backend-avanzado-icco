import request from './testConfig.js';
import mongoose from 'mongoose';
import { connectDB, disconnectDB } from '../database.js';

beforeEach(async () => {
  await mongoose.connection.db.dropDatabase();
});

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await disconnectDB();
});

describe('/auth', () => {
  test('/register', async () => {
    const res = await request.post('/auth/register').send({
      email: 'correo@correo.com',
      name: 'Fernanado',
      password: 'AB2c3D4e5F6',
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.user.name).toBe('Fernanado');
  });
  test('/login', async () => {
    const res1 = await request.post('/auth/register').send({
      email: 'correo@correo.com',
      name: 'Fernanado',
      password: 'AB2c3D4e5F6',
    });

    expect(res1.statusCode).toBe(201);
    expect(res1.body.user.name).toBe('Fernanado');

    const res2 = await request.post('/auth/login').send({
      email: 'correo@correo.com',
      password: 'AB2c3D4e5F6',
    });

    expect(res2.statusCode).toBe(200);
  });
});
