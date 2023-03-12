<body>
    <div class="register">
        <h1>Register</h1>
        <form class="register-form">
            <input type="email" id="email" class="form-control" placeholder="E-mail"/>
            <input type="password" id="password" class="form-control" placeholder="Password"/>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</body>

<style>
    .register {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }
    .register-form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    input, button {
        margin-top: .25rem;
    }
</style>