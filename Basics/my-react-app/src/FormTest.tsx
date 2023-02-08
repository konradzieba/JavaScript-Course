interface FormTestProps {
	myNum: number;
}

export const FormTest = ({ myNum } : FormTestProps) => {
	return <div>Hello {myNum}</div>;
};
