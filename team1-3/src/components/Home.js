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
        }}>Smart healthcare</h1>
            <div style={{display:"flex",
                justifyContent:'space-around',
                alignItems:'center',
                boxSizing:'border-box',
                padding:'25px',
                width:'30%'
                }}>
            
                <Link style={{textDecoration:"none"}} to="/app"><Button style={{width:'100px'}} variant="outline-primary" size="lg">App</Button></Link>
                <Link to="/ques"><Button style={{width:'100px'}} variant="outline-primary" size="lg">Ques</Button></Link>
            </div>
        </div>
        
        
        </>
    )
}

export default Home
