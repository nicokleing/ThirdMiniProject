const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'Library API Information',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      schemas: {
        Book: {
          type: 'object',
          required: ['title'],
          properties: {
            title: {
              type: 'string',
              description: 'Title of the book',
            },
            authors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                    description: 'Author name',
                  },
                  birth_year: {
                    type: 'integer',
                    description: 'Birth year of the author',
                  },
                  death_year: {
                    type: 'integer',
                    description: 'Death year of the author',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
