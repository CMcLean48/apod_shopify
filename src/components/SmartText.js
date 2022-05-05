import React, { useState } from 'react';
function SmartText({ text, length = 50 }) {
	const [showLess, setShowLess] = useState(true);

	if (text.length < length) {
		return <p>{text}</p>;
	}

	return (
		<div>
			<p className="info">
				{showLess ? `${text.slice(0, length)}...` : text}
			</p>
			<button
				style={{ color: 'blue', cursor: 'pointer' }}
				onClick={() => setShowLess(!showLess)}
			>
				&nbsp;View {showLess ? 'More' : 'Less'}
			</button>
		</div>
	);
}

export default SmartText;
