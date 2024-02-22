
const Sidebar = ({
	setColumn1,
	setColumn2,
	setColumn3,
	setColumn4,
	setColumn5,
	toggle,
}) => {
	return (
		<div className={`${toggle ? 'sidebarShow' : 'sidebarHide'}`}>
			<div className="checkboxArea">
				<div className="checkbox">
					<input
						value="test"
						type="checkbox"
						onChange={(e) => setColumn1(e.target.checked)}
					/>
					<span>Title</span>
				</div>
				<div className="checkbox">
					<input
						value="test"
						type="checkbox"
						onChange={(e) => setColumn2(e.target.checked)}
					/>
					<span>Date</span>
				</div>
				<div className="checkbox">
					<input
						value="test"
						type="checkbox"
						onChange={(e) => setColumn3(e.target.checked)}
					/>
					<span>Author</span>
				</div>
				<div className="checkbox">
					<input
						value="test"
						type="checkbox"
						onChange={(e) => setColumn4(e.target.checked)}
					/>
					<span>Status</span>
				</div>
				<div className="checkbox">
					<input
						value="test"
						type="checkbox"
						onChange={(e) => setColumn5(e.target.checked)}
					/>
					<span>Actions</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;