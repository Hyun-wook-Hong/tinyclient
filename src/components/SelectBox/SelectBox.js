import styled from "styled-components";
/*const OPTION = [
    { value: "apple", name: "사과"},
    { value: "banana", name: "바나나"},
    { value: "orange", name: "오렌지"}
]*/
export const Select = styled.select`
    margin: 0;
    min-width: 0;
    display: block;
    width: 100%;
    padding: 8px 8px;
    font-size: inherit;
    border: 1px solid;
    border-radius: 4px;
    color: inherit;
    background-color: transparant;
    &:focus{
        border-color: #3399ff;
    }
`;

const SelectBox = (props) => {
    const handleChange = (e) => {
        // event handler
        console.log(e.target.value);
    };
	return (
		<Select onChange={handleChange}>
			{props.options.map((option) => (
				<option
					value={option.value}
                    defaultValue={props.defaultValue === option.value}
				>
					{option.name}
				</option>
			))}
		</Select>
	);
}
export default SelectBox;