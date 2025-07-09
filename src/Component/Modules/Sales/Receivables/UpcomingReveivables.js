import React from 'react'

const UpcomingReveivables = () => {
  return (
    <div>
 <table className="table table-bordered table-hover text-center">
          <thead className="table-light">
            <tr>
                            <th>
Customer ID</th>

              <th>Customer Name</th>
              <th>0-30 Days</th>
              <th>	31-60 Days</th>
              <th>61-90 Days</th>
              <th>	After 90 Days</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5">No data available in table</td>
            </tr>
          </tbody>
        </table>    </div>
  )
}

export default UpcomingReveivables
