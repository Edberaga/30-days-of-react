import React, { useState } from 'react';
import classNames from 'classnames';

const Classname = (props) => {
    const [isPressed, setIsPressed] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const btnClass = classNames({
		btn: true,
		'btn-pressed': isPressed,
		'btn-over': !isPressed && isHovered,
	});

	return (
        <>
		<button
			className={btnClass}
			onMouseDown={() => setIsPressed(true)}
			onMouseUp={() => setIsPressed(false)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{props.label}

		</button>
        <div>
            <h1>{isPressed && "It has been pressed"}</h1>
            <h1>{isHovered && "It has been Hovered"}</h1>
        </div>
        </>
	);
}

export default Classname