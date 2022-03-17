import userStyle from './CreateUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { useState } from 'react';


const CreateUser = (props) => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const userSubmitHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            return;
        }
        if (+userAge < 1) {
            return;
        }
        console.log(userName, userAge);
        setUserName('');
        setUserAge('');
    }

    const userNameHandler = (event) => {
        setUserName(event.target.value);
    }
    const userAgeHandler = (event) => {
        setUserAge(event.target.value);
    }

    return (
        <Card customClass={userStyle.input}>
            <form onSubmit={userSubmitHandler} >
                <label htmlFor="name">Имя</label>
                <input id='name' type='text' onChange={userNameHandler} value={userName} />
                <label htmlFor="age">Возраст</label>
                <input id='age' type='number' onChange={userAgeHandler} value={userAge} />
                <Button type='submit'>Добавить пользователя</Button>
            </form>
        </Card>
    )
}

export default CreateUser;