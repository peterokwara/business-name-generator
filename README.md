<p align="center">
  <h3 align="center">Business Name Generator</h3>

  <p align="center">
A web app that generates business names based on keywords, industry and tone.
    <br>
    </p>
</p>

<br>

## Table of contents

- [About the Website](#about-the-website)
- [Technical](#technical)
- [Licence](#license)
- [Versions](#versions)
- [Contact Information](#contact-information)

### About the website

This is a web app that generates business names based on keywords, industry and tone.

<p align="center">
  <img src="./assets/business-name-generator.gif"/>
</p>

### Technical

#### Technology Used

This project uses: sveltekit, tailwindcss, ai, openai, openai-edge

#### Running the project

Ensure that you have the openai api key in the `.env` file. This can be generated here https://platform.openai.com/account/api-keys

Install the project dependencies by running

```console
pnpm install
```

And then navigate to https://localhost:5173 to view the project (in case no other sveltekit project is running).

#### CONTRIBUTING

I would/ We'd love to have your help in making **business name generator** better. The project is still very incomplete, but if there's an issue you'd like to see addressed sooner rather than later, let me(/us) know.

Before you contribute though read the contributing guide here: [Contributing.md](https://github.com/peterokwara/business-name-generator/blob/master/CONTRIBUTING.md)

For any concerns, please open an [issue](https://github.com/peterokwara/business-name-generator/issues), or JUST, [fork the project and send a pull request](https://github.com/peterokwara/business-name-generator/pulls).

<hr>

### License

- see [LICENSE](https://github.com/peterokwara/business-name-generator/blob/master/LICENSE) file

### Versions

- Version 1.0 DATE 10/04/2022

### Contact Information

If you have found any bugs, or have any feedback or questions and or want to post a feature request please use the [Issuetracker](https://github.com/peterokwara/business-name-generator/issues) to report them.

<hr>

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source-200x33.png?v=103)](#)

<br>

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](https://github.com/peterokwara/business-name-generator/blob/master/LICENSE)





# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

Create a new sveltekit project https://kit.svelte.dev/

```
pnpm create svelte@latest my-app
```

Install tailwind css to make designing easier https://tailwindcss.com/docs/guides/sveltekit

Tailwind forms https://github.com/tailwindlabs/tailwindcss-forms

```
body {
    height: 100vh
}
```

Basic form with all the elements

```html
<main class="mt-32">
	<div class="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<form class="space-y-8 divide-y divide-gray-200">
			<div class="pt-8">
				<div>
					<h3 class="text-lg font-medium leading-6 text-gray-900">Business name generator</h3>
					<p class="mt-1 text-sm text-gray-500">Generates a list of business names.</p>
				</div>
				<div class="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
					<div class="sm:col-span-6">
						<label for="keywords" class="block text-sm font-medium text-gray-700"> Keywords </label>
						<div class="mt-1">
							<input
								type="text"
								name="keywords"
								id="keywords"
								class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							/>
						</div>
					</div>

					<div class="sm:col-span-3">
						<label for="industry" class="block text-sm font-medium text-gray-700"> Industry </label>
						<div class="mt-1">
							<input
								type="text"
								name="industry"
								id="industry"
								class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							/>
						</div>
					</div>

					<div class="sm:col-span-3">
						<label for="tone" class="block text-sm font-medium text-gray-700">
							Desired tone/style
						</label>
						<div class="mt-1">
							<input
								id="tone"
								name="tone"
								type="text"
								class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							/>
						</div>
					</div>
				</div>
			</div>
			<button
				type="submit"
				class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Generate
			</button>
		</form>

		<div class="sm:col-span-6">
			<label for="about" class="block text-sm font-medium text-gray-700"> Suggestions </label>
			<div class="mt-1">
				<textarea
					id="suggestions"
					name="suggestions"
					rows="3"
					class="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
			</div>
		</div>
	</div>
</main>
```

https://sdk.vercel.ai/docs/api-reference/use-completion

install ai

```bash
pnpm install ai openai
```
