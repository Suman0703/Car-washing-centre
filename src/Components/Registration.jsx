export default function Register(){
    return (
    <>
    <form method="post">
        <input type="number" id="car_number" placeholder="Enter the car number..." ></input>
        <input type="text" id="owner_name" placeholder="Enter the Owner Name..." ></input>
        <input type="checkbox" id="services" placeholder="Select Services..">
        <Option>
            <li>Mat</li>
            <li>Cleaning</li>
            <li>Vacuum</li>
        </Option>
        </input>
    </form>
    </>
  )
}