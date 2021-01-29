const Button = () => {
    
    const clickHandler = (e) => {
        console.log('clickHandler',e);
    }


    return (
        <>
            {/* <button onclick="clickHandler()"> JavaScript Way of adding event handler */}
            <button onClick={clickHandler}>
                Click Me!1
            </button>

            <button onClick={(e) => {
                console.log('Click Me!2',e);
            }}>
                Click Me!2
            </button>

            <button onClick={(e) => {
                console.log('Click Me!3',e);
                clickHandler(e);
            }}>
                Click Me!3
            </button>
        </>
    )
};

export default Button;
