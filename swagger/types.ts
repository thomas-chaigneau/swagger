// FROM:
// https://github.com/drwpow/openapi-typescript/blob/1c4164bc3c0bdfa7b98e874b728c84dd18fb579a/src/types.ts#L63
// Allready updated and have to be update again

export interface OpenAPI3 {
  openapi: string; // required
  paths?: Record<string, PathItemObject>; // required
  info?: any;
  servers?: any;
  components?: {
    schemas?: Record<string, SchemaObject>;
    responses?: Record<string, ResponseObject>;
    parameters?: Record<string, ParameterObject>;
    requestBodies?: Record<string, RequestBody>;
    headers?: Record<string, HeaderObject>;
    links?: Record<string, LinkObject>;
  };
}

export interface HeaderObject {
  // note: this extends ParameterObject, minus "name" & "in"
  type?: string; // required
  description?: string;
  required?: boolean;
  schema: SchemaObject;
}

export interface PathItemObject {
  $ref?: string;
  summary?: string;
  description?: string;
  get?: OperationObject;
  put?: OperationObject;
  post?: OperationObject;
  delete?: OperationObject;
  options?: OperationObject;
  head?: OperationObject;
  patch?: OperationObject;
  trace?: OperationObject; // V3 ONLY
  parameters?: (ParameterObject)[];
}

export interface LinkObject {
  operationRef?: string;
  operationId?: string;
  parameters?: (ParameterObject)[];
  requestBody?: RequestBody;
  description?: string;
}

export interface OperationObject {
  description?: string;
  tags?: string[]; // unused
  summary?: string; // unused
  operationId?: string;
  parameters?: (ParameterObject)[];
  requestBody?: RequestBody;
  responses?: Record<string, ResponseObject>; // required
}

export interface ParameterObject {
  name?: string; // required
  in?: "query" | "header" | "path" | /* V3 */ "cookie" | /* V2 */ "formData" | /* V2 */ "body"; // required
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  schema?: SchemaObject; // required
  type?: "string" | "number" | "integer" | "boolean" | "array" | "file"; // V2 ONLY
  items?: SchemaObject; // V2 ONLY
  enum?: string[]; // V2 ONLY
}

export type ReferenceObject = { $ref: string };

export interface ResponseObject {
  description?: string;
  headers?: Record<string, HeaderObject>;
  schema?: SchemaObject; // V2 ONLY
  links?: Record<string, LinkObject>; // V3 ONLY
  content?: {
    // V3 ONLY
    [contentType: string]: { schema: SchemaObject };
  };
}

export interface RequestBody {
  description?: string;
  content?: {
    [contentType: string]: { schema: SchemaObject };
  };
}

export interface SchemaObject {
  title?: string; // ignored
  description?: string;
  required?: string[];
  enum?: string[];
  type?: string; // assumed "object" if missing
  items?: SchemaObject;
  allOf?: SchemaObject;
  properties?: Record<string, SchemaObject>;
  additionalProperties?: boolean | SchemaObject;
  nullable?: boolean; // V3 ONLY
  oneOf?: (SchemaObject)[]; // V3 ONLY
  anyOf?: (SchemaObject)[]; // V3 ONLY
}

export interface SwaggerToTSOptions {
  /** Generates immutable types (readonly properties and readonly array) */
  immutableTypes?: boolean;
  /** (optional) Path to Prettier config */
  prettierConfig?: string;
  /** (optional) Parsing input document as raw schema rather than OpenAPI document */
  rawSchema?: boolean;
  /** (optional) OpenAPI version. Must be present if parsing raw schema */
  version?: number;
}