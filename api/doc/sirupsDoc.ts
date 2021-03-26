import { PathItemObject } from '../../swagger/types'

import { siropSchemaObject } from '../models/Sirup';

const sirupDoc: Record<string, PathItemObject> = {
  "/sirups": {
    get: {
      tags: ["sirups"],
      summary: "Get sirups",
      description: "Returns all sirups registred in the app that the user has access to",
      parameters: [
        {
          name: "maxPrice",
          in: 'query',
          required: false,
          description: "Returns all sirups whose prices are lower than maxPrice",
          type: "number"
        },
      ],
      responses: {
        "200": {
          description: "A list of sirups.",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: siropSchemaObject,
              }
            }
          }
        },
      }
    },
    post: {
      tags: ["sirups"],
      summary: "Create a new sirup in list",
      requestBody: {
        description: "Sirup Object",
        content: {
          "application/json": {
            schema: siropSchemaObject
          }
        }
      },
      responses: {
        "200": {
          description: "OK",
          schema: {
            type: "array",
            items: siropSchemaObject,
          },
        },
      }
    }
  },
  "/sirups/{name}": {
    get: {
      tags: ["sirups"],
      summary: "Get sirup with given name",
      parameters: [
        {
          in: "path",
          name: "name",
          required: true,
          description: "Return the sirup matching given name",
        }
      ],
      responses: {
        "200": {
          description: "Succeeded. Sirup found",
          content: {
            "application/json": {
              schema: siropSchemaObject
            }
          }
        }
      }
    }
  }
}

export default sirupDoc;