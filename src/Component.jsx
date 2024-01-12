const Component = ({data}) => {
	
	return (
		<div>
			{data.map((item) => (
				<div key={item.id}>
					<button>{item.Country}</button>
					<button>{item.City}</button>
				</div>
			))}
		</div>
	);
};

export default Component;
