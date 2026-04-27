import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
   <main className='page-wrap px-4 pb-8 pt-14'>
    <h1>Welcome to TanStack Start</h1>
    <p>Edit <code>src/routes/index.tsx</code> to get started.</p>
   </main>
  )
}
