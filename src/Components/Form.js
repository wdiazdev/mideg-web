import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Form = () => {

    const schema = yup.object().shape({
        Name: yup.string().required('Nombre requerido!'),
        LastName: yup.string().required('Apellido requerido!'),
        Company: yup.string(),
        // For numbers you can make minimum and maximum validations .min(18).max(30)
        Phone: yup.number().positive().integer().required().typeError('Número de teléfono requerido!'),
        Email: yup.string().email().required('Correo electrónico requerido!'),
        Message: yup.string().required('Mensaje requerido')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='form--container'>
            <p>Escríbenos un mensaje a través del formulario a
                continueación o contacta directamente a una de nuestras oficinas.
            </p>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder='Nombre' {...register('Name')} />
                {errors.Name ? <p>{errors.Name?.message}</p> : null}

                <input type='text' placeholder='Apellidos' {...register('LastName')} />
                {errors.LastName ? <p>{errors.LastName?.message}</p> : null}

                <input type='text' placeholder='Empresa' {...register('Company')} />

                <input type='number' placeholder='Teléfono' {...register('Phone')} />
                {errors.Phone ? <p>{errors.Phone?.message}</p> : null}

                <input type='email' placeholder='Email' {...register('Email')} />
                {errors.Email ? <p>{errors.Email?.message}</p> : null}

                <textarea
                    cols="50"
                    rows="8"
                    placeholder='Mensaje'
                    {...register('Message')}
                >
                </textarea>
                {errors.Message ? <p>{errors.Message?.message}</p> : null}

                <input type='submit' className='btn' />
            </form>
        </div>
    )
}

export default Form