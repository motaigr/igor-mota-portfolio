/* 404 Page - Displays when a user attempts to access a non-existent route */
import { Link, useLocation } from 'react-router-dom'

const NotFound = () => {
  const location = useLocation()

  return (
    <div className="min-h-screen flex items-center justify-center bg-t-bg px-6">
      <div className="text-center max-w-md">
        <div className="font-mono text-[11px] text-t-gold uppercase tracking-wider mb-4">
          erro 404
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4 text-t-text">
          Página não encontrada
        </h1>
        <p className="font-mono text-sm text-t-muted mb-8 break-all">
          <span className="text-t-gold-dim">$</span> cd {location.pathname}
          <br />→ caminho inexistente
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-t-gold text-t-bg font-medium hover:opacity-90 transition-opacity duration-200"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}

export default NotFound
