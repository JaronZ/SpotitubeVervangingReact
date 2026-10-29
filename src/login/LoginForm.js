import "./LoginForm.css";

export default function LoginForm() {
    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const server = form.elements.namedItem("server").value;
        const user = form.elements.namedItem("user").value;
        const password = form.elements.namedItem("password").value;

        const token = await fetch(`${server}/login`, {
            method: form.method,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                user,
                password
            })
        }).then(res => res.json());

        localStorage.setItem("serverinfo", JSON.stringify({
            server,
            token: token.token
        }));
    }

    return (
        <form className="App-login-form" method="POST" onSubmit={handleSubmit}>
            <h2 className="App-login-form-title">Welcome to Spotitube</h2>
            <div>
                <input type="url" name="server" placeholder="Server URL" />
            </div>
            <div>
                <input type="text" name="user" placeholder="User" />
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" />
            </div>
            <div>
                <input type="submit" value="Login" />
            </div>
        </form>
    );
}