import React from 'react'
import { FeaturedCharts } from '../Data/D-FC'
import Topnav from '../Modules/Topnav'
import Content from '../Modules/Content'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Fcharts() {
  return (
    <div className='dash' >

      <Topnav />

      <div className='C_main0'>
        <div className='C_main1 container-fluid'>

          <Row>

            <Col md={3}>
              <Content />  
            </Col>

            <Col md={9}>
              <div className='mainC-1 '>

                <div className='MPA0'>
                  <h3>Featured Charts</h3>
                  <Link className='MPA-show0' to='/dashboard'>Back</Link>
                </div>

                <div className='artists2 d-flex flex-wrap'>
                  {
                    FeaturedCharts.map((a)=>{
                    return(
                      <Link className='artistsclick1' to={`/fcharts/${a.id}`} style={{color:'white', textDecoration:'none'}}>
                      <div>
                        <img src={a.Image} alt="" className='my-3' style={{width:'140px', height:'140px', borderRadius:'8px'}} />
                        <p style={{fontSize:'12px'}}>
                          {a.Name.slice(0,25)}
                          <br />
                          {a.Name.slice(25,50)}
                        </p>
                      </div>
                      </Link>
                    )
                    })
                  }
                </div>
                
              </div>
            </Col>

          </Row>
        </div>
      </div>

    </div>
  )
}

export default Fcharts