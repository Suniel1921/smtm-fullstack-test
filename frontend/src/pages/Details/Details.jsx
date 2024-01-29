import React from 'react'
import BoxContainer from '../../components/BoxContainer/BoxContainer'
import '../Details/Detail.css';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='container'>
        <div className='portfolioHeading'>
          <h4>Portfolio</h4>
          <p>cross icon</p>
        </div>

        <div className='overviewPortfolio portfolioHeading'>
          <button className='btn overviewBtn'>Back to Overview</button>
          {/* <button className='btn portfolioBtn'>Mero</button> */}
          <select>
            <option value="fam">Fam</option>
            <option value="mero">Mero</option>
          </select>
        </div>

        <div className='totalPortfolioView portfolioHeading'>
          <p>Total Portfolio Value</p>
          <p>5.45 Cr</p>
        </div>
        {/* box container components        */}
        <BoxContainer />
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
      <tbody onClick={()=> navigate('/stock')}>
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

export default Details