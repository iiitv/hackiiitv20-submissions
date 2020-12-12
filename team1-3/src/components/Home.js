import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import { Button } from 'react-bootstrap';

function Home() {
    return (
        <>
        <div style={{position:'absolute',
            width:'100%',
            height:'100%',
            top:'0',
            left:'0',
            display:'flex',
            flexFlow:'column',
            justifyContent:'center',
            alignItems:'center'
            }}>
            <h1 style={{padding:'20px',
            color:'#007bff'
        }}>Aztec-Lifeline</h1>
           <h1 style={{padding:'20px',
            color:'#007bff'
        }}>A Decentralized Smart Healthcare System</h1>
            <div style={{display:"flex",
                justifyContent:'space-around',
                alignItems:'center',
                boxSizing:'border-box',
                padding:'25px',
                width:'30%'
                }}>
            
                <Link style={{textDecoration:"none"}} to="/app"><Button style={{width:'100px'}} variant="outline-primary" size="lg">Login</Button></Link>
                <Link to="/ques"><Button style={{width:'200px'}} variant="outline-primary" size="lg">Consultation</Button></Link>
            </div>
        </div>
        
        
        </>
    )
}

export default Home
