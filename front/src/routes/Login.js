import React from 'react';

const Login = () =>{
    return(
      <div id="Loginpage" style={{display:'flex',background:'#FFFFFF',marginTop:'50px',height:'500px',boxShadow:'4px 4px 8px rgba(0,0,0,0.25)',borderRadius:'10px',overflow:'hidden'}}>
          <div id="rightContent" style={{display:'flex',height:'100%',width:'500px',justifyContent:'center'}}>
              <div style={{marginTop:'30px',width:'400px'}}>
                  <div>
                      Icon
                  </div>
                  <div>
                      Login
                  </div>
                  <div>
                      <input/>
                      <input/>
                  </div>
              </div>

          </div>
          <div  style={{width:'500px',background:'#2B2F42'}}>
              Right
          </div>
      </div>
    );
}

export default Login;