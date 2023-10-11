# Getting Started with Create React App

This is first app to try a data fetching library like SWR. So, I built this simple application which fetching data from server, and paginating data feature with `useSWR` using `the Rick and Morty Character API`.
it was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and created node server to fetch the data from this server by React Hook for data fetching [SWR](https://github.com/vercel/swr).

`SWR` automatically re-validating and updating data without requiring us to manually refresh or reload the application.

### The `useSWR` hook accepts two arguments.

`key` is the URL of our server or the API endpoint to fetch data from.
`fetcher` which is an async function that contains the logic for fetching the data.

`const fetcher = (...args) => fetch(...args).then((res) => res.json());`

`const { data, error, isLoading } = useSWR(key, fetcher);`

### `useSWR` returns two main values:

`data`, which is the object value returned from the resource you're fetching, and a `error`, which contains error, if any is caught.

It also returns two additional values, `isLoading` and `isValidating`, depending on the state of the fetcher function.

I have applied some of the features such as: Prefetching, Pagination, and Infinite Loading.

I used another hook which `useSWRInfinite()` to create the Infinite Loading to (Load More button) component.

## Available Scripts

In the `src` directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

In the `server` directory, you must move to this directory by this command `cd server` and run:

### `npm dev`

Runs the node server app.\
Open [http://localhost:3001](http://localhost:3001) to run the server.
