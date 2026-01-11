import { useParams } from "react-router-dom";

function UserDetail() {
  const { userId } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">User Detail Page</h2>
      <p className="text-lg mt-2">
        Welcome, User ID: <strong>{userId}</strong>
      </p>
    </div>
  );
}

export default UserDetail;
