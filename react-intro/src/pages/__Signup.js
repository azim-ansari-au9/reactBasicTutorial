import SignupForm from '../components/SignupForm';
const Signup = () => {

    const onSubmitHandler = (event) => {
        if(event) {
            console.log('INSIDE IF BLOCK')
            event.preventDefault();
            console.log(event);
        }
        alert('onSubmitHandler')   
    }

    const inputHandler = (e) => {
        console.log(e.target.value);
    }

    const propsObj = {
        inputHandler: inputHandler,
        title: 'SignUp',
        data: {
            email:'',
            pass:'',
        },
        datarr:[]
    };

    return(
        <div>
            <SignupForm
                onSubmit={onSubmitHandler}
                pageName="Signup"
                {...propsObj}
            />
        </div>
    );
};

export default Signup;
