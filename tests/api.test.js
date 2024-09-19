import request from './testConfig.js';

describe('API Test', () => {
  test('/', async () => {
    const res = await request.get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe('API Funcionando');
  });

  test('/test', async () => {
    const res = await request.get('/test');

    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe('API ruta /test ejecutada');
  });
});
