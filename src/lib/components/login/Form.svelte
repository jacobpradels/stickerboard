<div class="login">
    <form method="POST" action="/login" class="form" id="form">
        <h2>Login</h2>
        <input type="text" class="form-control" placeholder="Username">
        <input type="password" class="form-control" placeholder="Password">
        <button type="submit" class="btn btn-outline-secondary sbmt">Login</button>
    </form>
</div>

<style>
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100vh;
        flex-direction: column;
    }
        
    .form {
        display: flex;
        flex-direction: column;
        width: 300px;
        padding: 5rem;
        border-radius: 1rem;
        background: inherit;
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.144);
        background: radial-gradient(circle at 0px 0px,#ff47da, #5aa9e6);
        backdrop-filter: blur(10px);
    }
    input,button {
        margin-top: 1rem;
    }
    
    

    .sbmt {
        background-color: #40f99b;
        color: #535353;
        border: none;
    }

    .form-control:focus {
        outline: none;
        box-shadow: none;
    }
</style>