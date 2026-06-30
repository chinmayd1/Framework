import { test, expect } from '@playwright/test';
import { SchemaValidator } from '../../utils/apiUtils/SchemaValidator';
import { userSchema } from '../../utils/schemas/userSchemas';

test('Create User', async ({ request }) => {

  const payload = {
    name: 'Chinmay',
    job: 'QA Engineer'
  };

  const response = await request.post(
    'https://reqres.in/api/users',
    {
      data: payload
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  console.log(body);

  SchemaValidator.validate(
    userSchema,
    body
  );
});