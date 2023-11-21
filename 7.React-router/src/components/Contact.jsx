import { useLocation } from 'react-router-dom'

export default function Home() {
    const data = useLocation()
    
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center p-10">Contact us. {data.state.txt}</h1>
    </div>
  )
}
