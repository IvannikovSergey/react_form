import userStyle from './CreateUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { useState } from 'react';
import ErrorModule from '../UI/ErrorModul';


const CreateUser = (props) => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();

    const userSubmitHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'aaa',
                message: 'aaa'
            })
            return;
        }
        if (+userAge < 1) {
            setError({
                title: 'bbb',
                message: 'bbb'
            })
            return;
        }
        props.onCreateUser(userName, userAge);
        setUserName('');
        setUserAge('');
    }

    const userNameHandler = (event) => {
        setUserName(event.target.value);
    }
    const userAgeHandler = (event) => {
        setUserAge(event.target.value);
    }

    const onCloseHandler = () => {
        setError(false);
    }

    return (
        <>
            {error && <ErrorModule onCloseError={onCloseHandler} title={error.title} message={error.message} />}
            <Card customClass={userStyle.input}>
                <form onSubmit={userSubmitHandler} >
                    <label htmlFor="name">Имя</label>
                    <input id='name' type='text' onChange={userNameHandler} value={userName} />
                    <label htmlFor="age">Возраст</label>
                    <input id='age' type='number' onChange={userAgeHandler} value={userAge} />
                    <Button type='submit'>Добавить пользователя</Button>
                </form>
            </Card>
        </>
    )
}

export default CreateUser;