module.exports = function (plop) {
    plop.setGenerator("component", {
        description: "Create a component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is this component's name?",
            },
            {
                type: "input",
                name: "element",
                message: "HTML element (div is default)",
                default: "div",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
                templateFile: "templates/Component.tsx.hbs",
            },
        ],
    });

    plop.setGenerator("featureStructure",{
        description: "Create Feature folders with index.js",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is this new feature's name?",
            }
        ],
        actions: [
            {
                type: "add",
                path: "src/screens/{{pascalCase name}}/index.js",
            },
            {
                type: "add",
                path: "src/containers/{{pascalCase name}}/index.js",
            },
            {
                type: "add",
                path: "src/service/{{pascalCase name}}/index.js",
            },
        ],
    })
};
