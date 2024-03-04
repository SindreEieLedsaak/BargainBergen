const request = require('supertest');
const app = require('./server'); 

describe('API Endpoints', () => {
  it('should return API is running for the root route', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('API is running.');
  });

  it('should return JSON for the /api route', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'API is running.');
  });
});
