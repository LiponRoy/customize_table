import { Column1, Column2, Column3, Column4, Column5 } from '../../Constant';
const MainTable = ({ column1, column2, column3, column4, column5 }) => {
	return (
		<div>
			<div className="Container">
				{column1  &&
					Column1.map((value, index) => (
						<div key={index} className="column">
							<div className=" columnHeading">
								<span>{value.title}</span>
							</div>
							<div className="">
								{value.elements.map((value2, index) => (
									<div key={index} className="">
										<div className=" elements">
											<span>{value2.title}</span>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				{column2 &&
					Column2.map((value, index) => (
						<div key={index} className="column">
							<div className=" columnHeading">
								<span>{value.title}</span>
							</div>
							<div className="">
								{value.elements.map((value2, index) => (
									<div key={index} className="">
										<div className=" elements">
											<span>{value2.title}</span>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				{column3 &&
					Column3.map((value, index) => (
						<div key={index} className="column">
							<div className=" columnHeading">
								<span>{value.title}</span>
							</div>
							<div className="">
								{value.elements.map((value2, index) => (
									<div key={index} className="">
										<div className=" elements">
											<span>{value2.title}</span>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				{column4 &&
					Column4.map((value, index) => (
						<div key={index} className="column">
							<div className=" columnHeading">
								<span>{value.title}</span>
							</div>
							<div className="">
								{value.elements.map((value2, index) => (
									<div key={index} className="">
										<div className=" elements">
											<span>{value2.button}</span>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				{column5 &&
					Column5.map((value, index) => (
						<div key={index} className="column">
							<div className=" columnHeading">
								<span>{value.title}</span>
							</div>
							<div className="">
								{value.elements.map((value2, index) => (
									<div key={index} className="">
										<div className=" elements">
											<span>{value2.button}</span>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default MainTable;