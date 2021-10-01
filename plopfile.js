let count = 0
const componentGenerator = {
  description: "Create a new File",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "name of your file?",
      default: "Button",
    },
    {
      type: "confirm",
      name: "confirm",
      default: "y",
    },
  ],

  actions: () => {
    const actions = [
      {
        type: "modify",
        path: "./src/model/index.js",
        templateFile: "plop-templates/model/edit-index.js.hbs",
        pattern: /(let dummy)/gi,
        abortOnFail: false
      },
      {
        type: "modify",
        path: "./src/routes/index.js",
        templateFile: "plop-templates/routes/edit-index-import.js.hbs",
        pattern: /(let dummy)/gi,
        abortOnFail: false
      },
      {
        type: "modify",
        path: "./src/routes/index.js",
        templateFile: "plop-templates/routes/edit-index-route.js.hbs",
        pattern: /(},)/gi,
        abortOnFail: false
      },
      {
        type: "add",
        path: "./src/controller/{{lowerCase name}}.controller.js",
        templateFile: "plop-templates/controller/Controller.js.hbs",
      },
      {
        type: "add",
        path: "./src/routes/{{lowerCase name}}.routes.js",
        templateFile: "plop-templates/routes/Routes.js.hbs",
      },
      {
        type: "add",
        path: "./src/routes/index.js",
        templateFile: "plop-templates/routes/Index.js.hbs",
        skipIfExists: true
      },
      {
        type: "add",
        path: "./src/model/{{lowerCase name}}.model.js",
        templateFile: "plop-templates/model/Model.js.hbs",
      },
      {
        type: "add",
        path: "./src/index.js",
        templateFile: "plop-templates/Index.js.hbs",
        skipIfExists: true
      },
      {
        type: "add",
        path: "./src/model/index.js",
        templateFile: "plop-templates/model/Index.js.hbs",
        skipIfExists: true
      },
    ];
    return actions;
  },
};

const configGenerator = {
  description: "Create a new Config File",
  prompts: [
    {
      type: "confirm",
      name: "confirm",
      default: "y",
    },
  ],
  actions: () => {
    const actions = [
      {
        type: "add",
        path: "./config/config.js",
        templateFile: "plop-templates/Config.js.hbs",
      },
      {
        type: "add",
        path: "./.env",
        templateFile: "plop-templates/ENV.js.hbs",
      }
    ];
    return actions;
  },
};

//   const controllerGenerator = {
//     description: "Create a new Controller",
//     prompts: [
//       {
//         type: "input",
//         name: "name",
//         message: "Custom Controller name?",
//         default: "Time",
//       },
//     ],
//     actions: ({ stateless }) => {
//       const actions = [
//         {
//           type: "add",
//           path: "./src/controller/{{pascalCase name}}/{{pascalCase name}}.js",
//           templateFile: "plop-templates/Hooks.js.hbs",
//         },
//       ];
//       return actions;
//     },
//   };

//   const screenGenerator = {
//     description: "Create a new Screen",
//     prompts: [
//       {
//         type: "input",
//         name: "name",
//         message: "Screen name?",
//         default: "Home",
//       },
//       {
//         type: "confirm",
//         name: "stateless",
//         message: "Is it Stateless?",
//         default: "y",
//       },
//     ],
//     actions: ({ stateless }) => {
//       const actions = [
//         {
//           type: "add",
//           path: "./src/controller/{{pascalCase name}}/{{pascalCase name}}.jsx",
//           templateFile: "plop-templates/Component.js.hbs",
//         }
//       ];
//       return actions;
//     },
//   };

module.exports = (plop) => {
  plop.setGenerator("create files", componentGenerator);
  plop.setGenerator("config", configGenerator);
  // plop.setGenerator("hooks", controllerGenerator);
};
