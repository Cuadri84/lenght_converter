import Select from "react-select";



const Lengths = () =>{
    const options= [
        {value: "km to miles", label: "km to miles"},
        {value: "miles to km", label: "miles to km"},
        {value: "foot to meter", label: "foot to meter"},
        {value: "meter to foot", label: "meter to foot"},
        {value: "cm to inch", label: "cm to inch"},
        {value: "inch to cm", label: "inch to cm"}
    ];
    const handleChange = (selectedOption) => {
        console.log("handleChange",selectedOption);
    }

    return <Select className="lengths" options={options} onChange={handleChange} defaultValue={options[0]}  />
};


export default Lengths;