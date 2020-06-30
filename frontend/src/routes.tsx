import loadable from '@loadable/component'
import React from 'react'

export const LazyHelloWorld = loadable(
  () =>
    import(
      /* webpackChunkName: "helloWorld" */ './components/HelloWorld/HelloWorld'
    ),
  {
    fallback: <div>Loading...</div>,
  }
)

export const LazySecondPage = loadable(
  () =>
    import(
      /* webpackChunkName: "secondPage" */ './components/SecondPage/SecondPage'
    ),
  {
    fallback: <div>Loading...</div>,
  }
)
