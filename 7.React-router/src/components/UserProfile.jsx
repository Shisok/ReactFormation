import { useParams } from "react-router-dom"

export default function UserProfile() {
  const params = useParams();

    return (
    <div>
      <h1 className="text-4xl font-semibold text-center p-10">Your profile : {params.id}</h1>
    </div>
  )
}
