import { matches } from 'lodash';
import nock from 'nock';
import { CareerModel } from 'pages/Career/models/CareerModel';
import * as careerFixture from 'tests/fixtures/career.fixture';
import * as careerService from './careerService';

describe('career service test', () => {
  let careers: CareerModel[];
  let career: CareerModel;

  beforeEach(() => {
    careers = careerFixture.getList();
    career = careerFixture.getSingle();
  });

  it('should fetch career', async () => {
    nock('http://localhost:3001/api')
      .get('/carreras/12345')
      .reply(200, careers);
    const data = await careerService.listCareer('12345');
    expect(data).toEqual(careers);
  });

  it('should create career', async () => {
    nock('http://localhost:3001/api')
      .post('/carreras', matches(career))
      .reply(201);
    const value = await careerService.createCareer(career);
    expect(value).toBeTruthy();
  });

  it('should delete career', async () => {
    nock('http://localhost:3001/api').delete('/carreras/1').reply(200);
    const value = await careerService.deleteCareer(1);
    expect(value).toBeTruthy();
  });

  it('should create career', async () => {
    nock('http://localhost:3001/api')
      .post('/carreras', matches(career))
      .replyWithError('');
    const value = await careerService.createCareer(career);
    expect(value).toBeFalsy();
  });

  it('should delete career', async () => {
    nock('http://localhost:3001/api').delete('/carreras/1').replyWithError('');
    const value = await careerService.deleteCareer(1);
    expect(value).toBeFalsy();
  });
});
