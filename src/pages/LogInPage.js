import React, { useState } from "react";
import * as LogInComps from '../components/LogInComponents';
import { useNavigate } from "react-router-dom";

function LogInPage() {

    const navigate = useNavigate();
    const [userID] = useState({UserID: 0});

    const handleSignIn = (e) => 
    {
        e.preventDefault();
        let signIn = false;
        // Sign in algorithm
        signIn = true;

        if (signIn === true)
        {
            navigate('/Home', {state: {userID}});
        }
    };

    const handleSignUp = (e) =>
    {
        e.preventDefault();

        //Do something
    };

    const [signIn, toggle] = React.useState(true);
     return(
         <LogInComps.Container>
             <LogInComps.SignUpContainer signinIn={signIn}>
                 <LogInComps.Form onSubmit={handleSignUp}>
                     <LogInComps.Title>Create Account</LogInComps.Title>
                     <LogInComps.Input type='text' placeholder='Name' />
                     <LogInComps.Input type='email' placeholder='Email' />
                     <LogInComps.Input type='password' placeholder='Password' />
                     <LogInComps.Button type="submit">Sign Up</LogInComps.Button>
                 </LogInComps.Form>
             </LogInComps.SignUpContainer>

             <LogInComps.SignInContainer signinIn={signIn}>
                  <LogInComps.Form onSubmit={handleSignIn}>
                      <LogInComps.Title>Sign in</LogInComps.Title>
                      <LogInComps.Input type='email' placeholder='Email' />
                      <LogInComps.Input type='password' placeholder='Password' />
                      <LogInComps.Anchor href='#'>Forgot your password?</LogInComps.Anchor>
                      <LogInComps.Button type="submit">Sigin In</LogInComps.Button>
                  </LogInComps.Form>
             </LogInComps.SignInContainer>

             <LogInComps.OverlayContainer signinIn={signIn}>
                 <LogInComps.Overlay signinIn={signIn}>

                 <LogInComps.LeftOverlayPanel signinIn={signIn}>
                     <LogInComps.Title>Welcome Back!</LogInComps.Title>
                     <LogInComps.Paragraph>
                         Please login to continue your journey with us
                     </LogInComps.Paragraph>
                     <LogInComps.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </LogInComps.GhostButton>
                     </LogInComps.LeftOverlayPanel>

                     <LogInComps.RightOverlayPanel signinIn={signIn}>
                       <LogInComps.Title>Hello, Friend!</LogInComps.Title>
                       <LogInComps.Paragraph>
                           Sign up to start journey your with us
                       </LogInComps.Paragraph>
                           <LogInComps.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </LogInComps.GhostButton> 
                     </LogInComps.RightOverlayPanel>
 
                 </LogInComps.Overlay>
             </LogInComps.OverlayContainer>

         </LogInComps.Container>
     )
}

export default LogInPage;