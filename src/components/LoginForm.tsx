import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login, logout } from "../store/features/authSlice";
import { RootState } from "../store/store";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material"

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(login({ email, password }));
    };

    const handleLogout = () => {
        dispatch(logout());
    };


    return (
       /* <div>
            <h1>Login Page</h1>

            <div>
                <input 
                        type="text"
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                />

                <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                />

                <button  onClick={handleLogin}>Login</button>
                <button  onClick={handleLogout}>Logout</button>
            </div>

            <div>
                <h2>Auth state</h2>

                <p>Email: {auth.email}</p>
                <p>Password: {auth.password}</p>
            </div>
        </div>
        */
       <Container
            maxWidth = "sm"
            sx={{
                mt: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
       >


            <Paper
                elevation={10}
                sx={{
                    padding: 4,
                    background: "linear-gradient(145deg, #A50044, #004D98)",
                    color: "white",
                    borderRadius: "2",
                    textAlign: "center"
                }}            
            >


                <Typography variant="h4" gutterBottom>Login Page</Typography>

                <Box>
                    <TextField
                        type="email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            style: { color: "white"},
                        }}
                        InputLabelProps={{
                            style: { color: "white"},
                        }}
                    />

                    <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            style: { color: "white"},
                        }}
                        InputLabelProps={{
                            style: { color: "white"}
                        }}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        sx={{
                            mt: 2, 
                            fontWeight: "bold"
                        }}
                    >
                        Login 
                    </Button>

                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleLogout}
                        sx={{
                            mt: 2,
                            fontWeight: "bold",
                            color: "white"
                        }}
                    >
                        Logout
                    </Button>
                </Box>
            </Paper>

            <Box sx={{ mt: 3, textAlign: "center"}}>
                <Typography variant="h6">Auth State</Typography>
                <Typography>Email: {auth.email || "Not logged in "}</Typography>
                <Typography>Password: {auth.password || "Not logged in "}</Typography>
            </Box>
       </Container>
    );
};

export default Login;