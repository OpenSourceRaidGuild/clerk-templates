# Clerk Templates

Welome to the monorepo that houses all of Clerk's examples and templates. Please read this file to learn how to use this repo and test out Clerk.

## Using this Monorepo

### Enivornment Variables

Copy the `.env.example` file to `.env`, and edit it to add your Clerk keys to the top. You can visit your Clerk Dashboard and go to API Keys and copy over the keys from the Publishable and Secret Keys section. You can also select 'Remix' from the dropdown and copy over both keys in one shot from there. The .env file will make the keys available to any template you wish to run from this repo.

### Install packages

```bash
pnpm i
```

This will install all packages for all templates.

### Using a template

| Template              | Command                    |
| --------------------- | -------------------------- |
| React                 | pnpm dev:react             |
| Nextjs - Pages Router | pnpm dev:nextjs-pages      |
| Nextjs - App Router   | pnpm dev:nextjs-app-router |
| Redwood               | pnpm dev:reedwood          |

## Updating all templates in repo

```bash
pnpm update -r
```

## Adding to repo

### Option 1

1. Run `pnpm new:templates` to scaffold some basics for your application.
2. Install the application in the directory created by the command, inside of app/
3. Add a line to the script section to start the applcation:
   Example:

```json
"dev:react": "dotenv -- turbo run dev --filter <name>"
```

Change the **_<name>_** to match the name you used for the directory name and in the application's **_package.json_**.

### Option 2

1. Run `pnpm run new:copy --copy=<repo url>` to copy a starter/repo into this repo. Follow the prompts.
2. Make sure that the **_package.json_** has the correct 'name' value.
3. Add a line to the script section to start the applcation:
   Example:

```json
"dev:react": "dotenv -- turbo run dev --filter <name>"
```

Change the **_<name>_** to match the name you used for the directory name and in the application's **_package.json_**.
