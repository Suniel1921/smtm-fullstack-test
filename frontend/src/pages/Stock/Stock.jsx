import React from 'react'
import BoxContainer from '../../components/BoxContainer/BoxContainer'
import '../Stock/Stock.css'

const Stock = () => {
  return (
    <>
      <div className='container'>
        <div className='portfolioHeading'>
          <h4>Portfolio</h4>
          <p>cross icon</p>
        </div>

        <div className='overviewPortfolio portfolioHeading'>
          <button className='btn overviewBtn'>Fam</button>
          {/* <button className='btn portfolioBtn'>Mero</button> */}
          <select>
            <option value="fam">ADBL</option>
            <option value="mero">ADBL</option>
          </select>
        </div>

        <div className='totalPortfolioView portfolioHeading'>
          <p>Market Value</p>
          <p>5.45 Cr</p>
        </div>
        {/* box container components        */}
        <BoxContainer />
        <BoxContainer />
        <div className='buySellBtn'>
    <button className='btn'>Buy</button>
    <button className='btn'>Sell</button>
  </div>
      </div>

      <div className='stocks'>
    <div className='stockData'>
      <p>Stocks</p>
      <div className='stockData'>
        <p className='percentange circle'>%</p>
        <p className='rs circle'>Rs</p>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Day's gain</th>
          <th>unrealized gain</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ADBL</td>
          <td>+0.53%</td>
          <td>0.53%</td>
        </tr>
        <tr>
          <td>ADBL</td>
          <td>+0.53%</td>
          <td>0.53%</td>
        </tr>
        <tr>
          <td>ADBL</td>
          <td>+0.53%</td>
          <td>0.53%</td>
        </tr>
        <tr>
          <td>ADBL</td>
          <td>+0.53%</td>
          <td>0.53%</td>
        </tr>
      </tbody>
    </table>
  </div>

 

    </>
  )
}

export default Stock