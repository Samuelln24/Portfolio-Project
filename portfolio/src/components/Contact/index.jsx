import { useState } from 'react'


const Contact = () => {

    const submit = (a) => {
        a.preventDefault();
    }

    return (
        <form onSubmit={submit}>
            <div>
                <label>Nom :</label>
                <input type="text" name="name" />
            </div>
            <div>
                <label>Email :</label>
                <input type="text" name="email" />
            </div>
            <div>
                <label>Message :</label>
                <textarea name="message"></textarea>
            </div>
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default Contact;

