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
	<div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
		<form class="space-y-8 divide-y divide-gray-200">
			<div class="pt-8">
				<div>
					<h3 class="text-lg leading-6 font-medium text-gray-900">Business name generator</h3>
					<p class="mt-1 text-sm text-gray-500">Generates a list of business names.</p>
				</div>
				<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
					<div class="sm:col-span-6">
						<label for="keywords" class="block text-sm font-medium text-gray-700"> Keywords </label>
						<div class="mt-1">
							<input
								type="text"
								name="keywords"
								id="keywords"
								class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
								class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
								class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
							/>
						</div>
					</div>
				</div>
			</div>
			<button
				type="submit"
				class=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
					class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
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
