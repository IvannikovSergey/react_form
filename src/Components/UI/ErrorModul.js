import modalStyle from './ErrorModule.module.css';
import Card from './Card';
import Button from './Button';


const ErrorModule = (props) => {

    return <div>
        <div className={modalStyle.backdrop} onClick={props.onCloseError}></div>
        <Card customClass={modalStyle.modal}>
            <header className={modalStyle.header}>
                <h2 className={modalStyle.h2}>{props.title}</h2>
            </header>
            <div className={modalStyle.content}>
                <p>{props.message}</p>
            </div>
            <footer className={modalStyle.actions}>
                <Button buttonClick={props.onCloseError}>Закрыть</Button>
            </footer>
        </Card>
    </div>
}


export default ErrorModule;