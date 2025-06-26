import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return (
//     <div>
//       <h1>Custom App | Aur sunna</h1>
//     </div>
//   )
// }


// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children : 'Click me to visit google'
// }


// const AnotherElement = (
//   <a href='https://google.com' target='_blank'>Visit Google</a>
// )

// const Element = React.createElement(
//   'a',
//   {href: 'https://google.com',
//     target: '_blank'
//   },
//   'click me to visit google'
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
  </StrictMode>,
)
