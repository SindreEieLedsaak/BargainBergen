// server.test.js
const request = require('supertest');
const app = require('./server'); 

describe('API Endpoint Testing', () => {
  it('GET /api should respond with a message', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Hello from the backend' });
  });
});
