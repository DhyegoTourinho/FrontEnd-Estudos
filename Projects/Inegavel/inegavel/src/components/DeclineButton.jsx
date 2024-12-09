import { useState } from "react";

const DeclineButton = () => {
    const [isVisible, setIsVisible] = useState(true);
    const handleClick = () => {
        setIsVisible(false);
    }
    const ShowButton = () => {
        setIsVisible(true)
    }
  return (
    <div>
        {
            isVisible && (
                <button onClick={handleClick} onMouseLeave={ShowButton}>Decline</button>
                        )
            }
    </div>
  )
}

export default DeclineButton;