import React from 'react'
import '../Home/Home.css'
import { Link, useNavigate } from 'react-router-dom'
import BoxContainer from '../../components/BoxContainer/BoxContainer'


const Home = () => {


  return (
    <>
      <div className='container'>
        <div className='portfolioHeading'>
          <h4>Portfolio</h4>
          <p>cross icon</p>
        </div>

        <div className='overviewPortfolio portfolioHeading'>
          <button className='btn overviewBtn'>Overview</button>
          <button className='btn portfolioBtn'>Portfolio</button>
        </div>

        <div className='totalPortfolioView portfolioHeading'>
          <p>Total Portfolio Value</p>
          <p>5.45 Cr</p>
        </div>
        {/* box container components        */}
        <BoxContainer/>
      </div>

      <section className='yourPortfolio'>
        <h4>Your Portfolio</h4>
        <div className='yourPortfolioBtn'>
          <button>Day's Gain</button>
          <button>Unrealised</button>
          <button>Realised</button>
          <button>Overall</button>
        </div>

        <Link to={'/details'}>
          <div className='Fam'>
            <div>
              <p>Fam</p>
              <p>68,121.00</p>
            </div>
            <div>
              <p>-234.00</p>
              <p>-0.36%</p>
            </div>
          </div>
          <div className='Mero Fam'>
            <div>
              <p>Fam</p>
              <p>68,121.00</p>
            </div>
            <div>
              <p>-234.00</p>
              <p>-0.36%</p>
            </div>
          </div>
        </Link>
      </section>


    </>
  )
}

export default Home