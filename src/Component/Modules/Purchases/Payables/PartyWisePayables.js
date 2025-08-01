import React from 'react'

const PartyWisePayables = () => {
  return (
    <div>
       <div className="table-responsive">
        <div className="d-flex justify-content-between mb-2">
          <div>
            Show
            <select className="form-select d-inline-block mx-2" style={{ width: '80px' }}>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            entries
          </div>
          <div>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </div>

        <table className="table table-bordered table-hover text-center">
          <thead className="table-light">
            <tr>
              <th>
Customer ID </th>
              <th>Purchase Invoice</th>
              <th>Customer Name</th>
              <th>	Total payable </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5">No data available in table</td>
            </tr>
          </tbody>
        </table>

        <div className="d-flex justify-content-between">
          <div>Showing 0 to 0 of 0 entries</div>
          <div>
            <button className="btn btn-link">Previous</button>
            <button className="btn btn-link">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartyWisePayables
