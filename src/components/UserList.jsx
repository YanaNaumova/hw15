function UserList({ users }) {
  return (
    <div>
      {users &&
        users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
    </div>
  );
}

export default UserList;
