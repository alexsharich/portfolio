import React from "react";
import styleContainer from './../common/styles/Container.module.css'
import s from './Contacts.module.css'
import { Title } from '../title/Title'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsBlock_Container} ${styleContainer.container}`}>
                <Title title={'Contacts'} />
                <form className={s.contacts_form} action="#">
                    <input type="text" placeholder={'text'} />
                    <input type="text" placeholder={'text'} />
                    <textarea placeholder={'text'}></textarea>
                </form>
                <button type="submit" className={s.sendButton_contactsBlock}>Send</button>
            </div>
        </div>
    )
}