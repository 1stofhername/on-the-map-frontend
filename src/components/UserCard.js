export default function UserCard ({ user }) {
    return (
        <div class="card" id="user-card">
            <h3>{user.first_name} {user.last_name}</h3>
            <h4>{user.headline}</h4>
        </div>
    )
}