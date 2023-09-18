import { execSync } from "node:child_process";
import type { PlopTypes } from "@turbo/gen";

const installDeps: PlopTypes.CustomActionFunction = async (answers) => {
  //install dependencies in new package.json

  // DevDependencies
  // "prettier": "",
  // "typescript": "", // This should be the "@clerk/typescript" config eventually
  // "eslint": "", // This should be the "@clerk/eslint" config eventually

  // Dependencies
  // "@clerk/clerk-js": "" // make this dynamic to vanilla or React from inputs or inferences

  execSync(
    //@ts-expect-error answers is `object` but should be unknown or a generic object type
    `cd apps/${answers.name} && pnpm install -D prettier typescript eslint`
  );
  //@ts-expect-error answers is `object` but should be unknown or a generic object type
  execSync(`cd apps/${answers.name} && pnpm install @clerk/clerk-js`);

  return "Dependencies installed";
};
export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("template", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the template?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "apps/{{ name }}/package.json",
        templateFile: "templates/package.json.hbs",
      },
      {
        type: "add",
        path: "apps/{{ name }}/src/index.ts",
      },
      installDeps,
    ],
  });
}
