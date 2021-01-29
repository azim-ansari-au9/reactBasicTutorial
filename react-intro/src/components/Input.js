const Input = () => {
    
    const anythingHandlerOrAnything = (orAnyVaiableThatYouWantToUse,eventTwo) => {
        console.log('orAnyVaiableThatYouWantToUse',orAnyVaiableThatYouWantToUse)
        console.log('eventTwo',eventTwo)
    }

    return (
        <>
            <input name="email" type="text" onChange={anythingHandlerOrAnything} />
            
            <input name="name" type="text" onChange={(e) => anythingHandlerOrAnything()} />
        </>
    )
};

export default Input;
