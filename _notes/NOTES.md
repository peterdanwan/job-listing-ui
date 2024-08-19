# React Crash Course 2024

## Table of Contents

1. [What is React?][1-what-is-react]
2. [Why React?][2-why-react]
3. [Components][3-components]
4. [State][4-state]
5. [Hooks][5-hooks]
6. [JSX (JavaScript Syntax Extension)][6-jsx]
7. [SPA, SSR & SSG][7-spa-ssr-ssg]
8. [vite][8-vite]
9. [Getting Started][9-getting-started]
10. [Delete boilerplate css][10-deleting-boilerplate-css]

[Jump to End][end]

## 1. What is React?

- React is a JavaScript `library` for building user interfaces, created by Facebook
  - Some people call it a framework, but it isn't
  - A framework contains more than just a library for building interfaces
    - e.g., a router, an HTTP client, state management library, etc.
  - However, the _combination_ of other libraries with React can make it a full solution
    - e.g., React + React Router
- Websites/UIs are looked at in terms of `components`
- React is currently the most popular out of the major front-end frameworks
- React can be used for:
  - Single Paged Apps
  - Server side rendered applications and static websites

## 2. Why React?

- React allows us to build very dynamic and interactive websites and user interfaces
  - With the dawn of AJAX calls which didn't force your page to refresh when making an API call
  - Websites became more complex
  - React helps us reduce the boilerplate code needed to maintain applications that use these AJAX calls
- Very fast, especially with the new compiler
  - React 14 may or may not use the points below, but it's still good to know how previous version of React Work
  - React uses what we call a Virtual DOM, which is a lightweight copy of the Actual DOM
  - When the state of a component changes, the Virtual DOM changes first, then React will compare the two and update only the parts of the Actual DOM that need to be updated
- There is a huge ecosystem from `Next.js` to `React Native`
- Best "framework" (again, not really a framework) to learn to get a job

## 3. Components

- `Reusable piece of code` that can be used to build elements on the page
- Allows us to break down complex UIs, which makes them easier to maintain and scale
- `Components` can get `props` passed in and can hold their own `state`

## 4. State

- State represents the data that a component manages internally which can change over time
- State can be changed in response to user interactions or other factors such as:
  - `form input data`
  - `fetched data`
  - `UI-related data`, like if a modal is open/closed
- There is also `global state`, which relates to the app as a whole and not a single component
  - e.g., data you fetch from a database (probably want to share to the app as a whole, i.e., to multiple components)
  - There are multiple ways to handle global state
    - 1. We can pass everything from the main component and then down through props
    - 2. React Context API (outside the scope of this course)
    - 3. React Redux (outside of the scope of this course)
- State is used for data that is:
  - expected to change
  - we use the `useState` "hook" to keep track of our `states`.

```jsx
const NavBar = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  // Access unreadMessagesCount from the global context
  const { unreadMessagesCount, setUnreadMessagesCount } = useGlobalContext();

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
  });
};
```

## 5. Hooks

Allow us to use state and other React features within functional components

1. useState
2. useEffect
3. useRef
4. useReducer

> useContext, useMemo, & useCallback will be phased out in React 19

## 6. JSX (JavaScript Syntax Extension)

- An HTML-like syntax used within JavaScript Components

```jsx
// src/components/Hero.jsx
const Hero =
  // Props
  ({
    title = 'Become a React Dev',
    subtitle = 'Find the React job that fits your skills and needs',
  }) => {
    // The component we return
    return (
      // NOTE: in HTML, we would have used 'class' instead of 'className'
      // NOTE: in HTML, we'd use 'for', but in JSX, we use 'htmlFor'
      <section className='bg-indigo-700 py-20 mb-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
          <div className='text-center'>
            <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
              {title}
            </h1>
            <p className='my-4 text-xl text-white'>{subtitle}</p>
          </div>
        </div>
      </section>
    );
  };
```

## 7. SPA, SSR & SSG

> There are 3 different types of websites you can build with React: `Single Page App`, `Server-Side Rendered`, `Static Site Generation`

- `Single Page App` - Load a single HTML file into the browser(i.e., index.html) and a JavaScript bundle that includes the entire UI including routes
  - this allows our interface to be very interactive
  - when you go to a particular page, (e.g., /about), it's not actually loading the page from the server, the JS is loading the content for you
  - downside of SPAs are:
    - initial page load-times
    - bad SEO because the _content_ comes from JavaScript (the search engines rely on HTML to determine the content of your website)
  - frameworks were initially created for this
- `Server-Side Rendered` - Server sends fully rendered page to client. You can fetch data and load it as well
  - Next.js or Remix are good solutions for these type of apps
  - Both of the frameworks above use React and are considered wrappers around React
  - Instead of everything being bundled in JavaScript, the initial payload is rendered on the server (good for SEO, and initial page load time)
  - More difficult to deploy because you _need_ a server
  - You can use something like `Vercel` or `Netlify`
- `Static Site Generation` - The framework using React generates static HTML files at build time. These are very fast.
  - e.g., Gatsby and Astro

## 8. Vite

- `Vite` is a super fast front-end toolkit that can be used for all kinds of JS projects including React
- It is built on top of `ESBuild`, which is a very fast JS bundler
- Fast development server with hot-reload
- Installed with `npm create vite@latest`

## 9. Getting Started

- Need to have React Developer Tools on your Browser
- Need `node.js`
- Run `npm create vite@latest`

## 10. Delete boilerplate css

- Don't need `App.css`

## End

[1-what-is-react]: #1-what-is-react
[2-why-react]: #2-why-react
[3-components]: #3-components
[4-state]: #4-state
[5-hooks]: #5-hooks
[6-jsx]: #6-jsx-javascript-syntax-extension
[7-spa-ssr-ssg]: #7-spa-ssr--ssg
[8-vite]: #8-vite
[9-getting-started]: #9-getting-started
[10-deleting-boilerplate-css]: #10-delete-boilerplate-css
[end]: #end
