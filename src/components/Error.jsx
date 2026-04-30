import { useRouteError, Link } from 'react-router'

const Error = () => {
  const error = useRouteError()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-6">
      <h1 className="text-6xl font-bold mb-4">
        {error?.status || '404'}
      </h1>
      <h2 className="text-2xl font-semibold mb-2">
        {error?.statusText || 'Page Not Found'}
      </h2>
      <p className="text-gray-500 text-center max-w-md mb-6">
        {error?.data || 'Sorry, the page you are looking for does not exist or has been moved.'}
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-800 transition"
      >
        Go Home
      </Link>
    </div>
  )
}

export default Error