import { OpenAPI3 } from './types';
import sirupsDoc from '../api/doc/sirupsDoc';
import sodasDoc from '../api/doc/sodasDoc';

const doc: OpenAPI3 = {
    openapi: '3.0.0',
    info: {
        title: 'Homeboarding Api',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        contact: {
            "name": "API Support",
            "url": "http://www.homebording.com/support",
            "email": "support@homebording.com"
        },
    },
    servers: [
        {
          url: 'http://localhost:3001/api',
          description: 'Local server',
        },
        {
            "url": "http://homeboarding-dev.teckstudio.ninja/api",
            "description": "Dev server"
        },
        {
            "url": "http://homeboarding-staging.teckstudio.ninja/api",
            "description": "Staging server"
        },
    ],
    paths: {
        ...sirupsDoc,
        ...sodasDoc,
    },
}

export default doc;


 // security: [
    //     {
    //         "type": "oauth2",
    //         "flows": {
    //             "implicit": {
    //                     "authorizationUrl": "https://example.com/api/oauth/dialog",
    //                     "scopes": {
    //                     "write:pets": "modify pets in your account",
    //                     "read:pets": "read your pets"
    //                 }
    //             }
    //         }
    //     }
    // ],
    // components: {
    //     parameters: {
    //         skip: {
    //           name: "skip",
    //           in: "query",
    //           description: "number of items to skip",
    //           required: true,
    //           schema: {
    //             type: "integer",
    //             format: "int32"
    //           }
    //         },
    //         limit: {
    //             name: "limit",
    //             in: "query",
    //             description: "max records to return",
    //             required: true,
    //             schema : {
    //                 type: "integer",
    //                 format: "int32"
    //             }
    //         }
    //     },
    // },