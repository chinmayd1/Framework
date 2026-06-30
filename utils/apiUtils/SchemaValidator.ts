import Ajv from 'ajv';

export class SchemaValidator {

  private static ajv = new Ajv();

  static validate(
    schema: object,
    response: unknown
  ): void {

    const validate =
      this.ajv.compile(schema);

    const valid =
      validate(response);

    if (!valid) {
      throw new Error(
        JSON.stringify(validate.errors, null, 2)
      );
    }
  }
}