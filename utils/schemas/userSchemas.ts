export const userSchema = {
  type: "object",

  properties: {
    id: {
      type: "number"
    },
    name: {
      type: "string"
    },
    job: {
      type: "string"
    },
    createdAt: {
      type: "string"
    }
  },

  required: [
    "id",
    "name",
    "job",
    "createdAt"
  ],

  additionalProperties: false
};