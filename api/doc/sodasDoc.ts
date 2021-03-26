import { PathItemObject } from '../../swagger/types'

import { sodaSchemaObject } from '../models/Soda';

const sodaDoc: Record<string, PathItemObject> = {
  "/sodas": {
    get: {
      tags: ["Sodas"],
      summary: "Get sodas",
      description: "Returns all sodas registred in the app that the user has access to",
      responses: {
        "200": {
          description: "A list of sodas.",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: sodaSchemaObject,
              }
            }
          }
        },
      }
    },
    post: {
      tags: ["Sodas"],
      summary: "Create a new soda in list",
      requestBody: {
        description: "Soda Object",
        content: {
          "application/json": {
            schema: sodaSchemaObject
          }
        }
      },
      responses: {
        "200": {
          description: "OK",
          schema: {
            type: "array",
            items: sodaSchemaObject,
          },
        },
      }
    }
  },
  "/sodas/{name}": {
    put: {
      tags: ["Sodas"],
      summary:  "Update soda thanks to name",
      parameters: [
        {
          in: "path",
          name: "name",
          required: true,
          description: "Fing the soda to update",
        }
      ],
      requestBody: {
        description: "Soda Object",
        content: {
          "application/json": {
            schema: sodaSchemaObject
          }
        }
      },
      responses: {
        "200": {
          description: "OK",
          schema: sodaSchemaObject,
        },
      }
    }
  }
}

export default sodaDoc;