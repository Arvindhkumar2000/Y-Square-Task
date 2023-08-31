import { useState } from "react";
const Data = [{
    "id": 1,
    "first_name": "Helaine",
    "last_name": "Basten",
    "email": "hbasten0@nba.com",
    "phone_number": "141 505 4616"
  }, {
    "id": 2,
    "first_name": "Edin",
    "last_name": "Farry",
    "email": "efarry1@xing.com",
    "phone_number": "104 780 1089"
  }, {
    "id": 3,
    "first_name": "Shayne",
    "last_name": "Rickword",
    "email": "srickword2@latimes.com",
    "phone_number": "215 823 9847"
  }, {
    "id": 4,
    "first_name": "Gina",
    "last_name": "Reisenstein",
    "email": "greisenstein3@nba.com",
    "phone_number": "550 505 8339"
  }, {
    "id": 5,
    "first_name": "Nicoline",
    "last_name": "Weyland",
    "email": "nweyland4@engadget.com",
    "phone_number": "605 974 1510"
  }];
  

const SearchTable = ()=>{
    const [search,setsearch] = useState("");
    const handleSearch = (e) => {
        setsearch(e.target.value);
    }
    const searchedData = Data.filter((data) =>
    data.first_name.toLowerCase().includes(search.toLowerCase()) ||
    data.last_name.toLowerCase().includes(search.toLowerCase()) ||
    data.email.toLowerCase().includes(search.toLowerCase()) ||
    data.phone_number.includes(search)
  );


    return(
        <div className="container">
            <input type ="text" placeholder="Search" className="form-control" onChange={handleSearch}/>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>PhoneNumber</th>
                    </tr>
                </thead>
                <tbody>
                     {searchedData.map((data,index)=> (
                     <tr key = {data.id}>
                        <td>{data.first_name}</td>
                        <td>{data.last_name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone_number}</td>
                     </tr>))}               
                </tbody>
            </table>

        </div>
    )
}
 export default SearchTable;