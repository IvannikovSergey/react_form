import buttonStyles from './Button.module.css';

const Button = (props) => {
    return <button className={buttonStyles.button} type={props.type || 'button'} onClick={props.buttonClick}>
        {props.children}
    </button>
}

export default Button;