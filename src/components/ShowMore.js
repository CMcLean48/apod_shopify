import React, { useState } from 'react';
function ShowMore({ text, length = 50 }) {
	const [showLess, setShowLess] = useState(true);

	if (text.length < length) {
		return <p>{text}</p>;
	}

	return (
		<div className="showExplanation">
			<p className="info">
				{showLess ? `${text.slice(0, length)}...` : text}
			</p>
			<button
				className="showButton"
				onClick={() => setShowLess(!showLess)}
			>
				&nbsp;View {showLess ? 'More' : 'Less'}
			</button>
		</div>
	);
}

export default ShowMore;
